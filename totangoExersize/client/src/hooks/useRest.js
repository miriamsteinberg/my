export const useRest = () => {

    const getBooks = () =>
        fetch('http://localhost:3002/books'); //TODO: need to stored in config param


    const addBook = (book) => fetch('http://localhost:3002/books', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(book)
    });

    const removeBook = (isbn) => fetch(`http://localhost:3002/books/?isbn=${isbn}`, {
        method: 'delete'
    });


    const editBook = (book) => fetch('http://localhost:3002/books/' + book.ISBN, {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(book)
    });

    return {addBook, removeBook, editBook, getBooks}
}