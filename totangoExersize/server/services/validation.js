const createValidation = (book) => {

    let messages = [];

    console.log(book);

    if (!book) {
        messages.push('No object is provided');
    }

    if (!book.ISBN) {
        messages.push('book ISBN is empty');
    }

    if (!book.author) {
        messages.push('book author is empty');
    }

    if (messages.length) {
        let error = new Error(messages.join());
        error.statusCode = 515;

        throw error;
    }

}

module.exports = {
    createValidation
}