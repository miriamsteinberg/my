const db = require('./db');
const helper = require('../helper');
const config = require('../config');
const {createValidation} = require('./validation');

async function get(page = 1, isbn) {
    const offset = helper.getOffset(page, config.listPerPage);
    const oneCondition = isbn ? ` where ISBN = ${isbn} ` : '';

    const rows = await db.query(
        `SELECT *
         FROM books ${oneCondition}
         OFFSET ${offset} LIMIT ${config.listPerPage}`
    );
    const data = helper.emptyOrRows(rows);
    const meta = {page};

    return {
        data,
        meta
    }
};

async function create(book) {
    createValidation(book);

    const query = 'INSERT INTO books(title, description, "ISBN", author, "publicationDate", genre, price) VALUES' +
        ` ('${book.title}','${book.description}', ${book.ISBN},'${book.author}', '${book.publicationDate}', ${book.genre},${book.price}) RETURNING *`;
    console.log(query);

    const result = await db.query(query, []);
    let message = 'Error in creating book';

    if (result.length) {
        message = 'Book created successfully';
    }

    return {message};
};

async function remove(isbn) {
    const result = await db.query(` delete from books where "ISBN" = ${isbn}`, []);
    let message = 'Error in removing book';

    if (result.length) {
        message = 'Book removed successfully';
    }

    return {message};
};

async function edit(isbn, book) {
    const query = ' UPDATE books' +
        ` SET title='${book.title}' , description='${book.description}', author='${book.author}', "publicationDate"='${book.publicationDate}', genre='${book.genre}', price='${book.price}' ` +
        ` WHERE "ISBN" = ${isbn} `
    console.log(query);
    const result = await db.query(query, []);
    let message = 'Error in editing book';

    if (result.length) {
        message = 'Book edited successfully';
    }

    return {message};
}


module.exports = {
    get,
    create,
    remove,
    edit
}
