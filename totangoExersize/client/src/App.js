import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch('http://localhost:3002/books') //TODO: need to stored in config param
            .then((res) =>
                res.json())
            .then((data) =>
                setData(data.data)
            );
    }, [data]);

    const book = {
        title: 'title ggg ',
        description: 'description ggg',
        "ISBN": 5555,
        author: 'web page',
        "publicationDate": '01.01.2001',
        genre: 2,
        price: 100
    };

    console.log(book.ISBN);
    console.log(book);

    const addBook = () => fetch('http://localhost:3002/books', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({...book, ISBN: data[data.length - 1].ISBN + 1})
    });

    const removeBook = () => fetch(`http://localhost:3002/books/?isbn=${data[data.length - 1].ISBN}`, {
        method: 'delete'
    });


    const editBook = () => fetch('http://localhost:3002/books/' + data[0].ISBN, {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({...data[0], author: 'edied'})
        })
    ;

    const books = data?.map((b, ind) => <div key={ind}>ISBN: {b.ISBN} Author: {b.author}</div>);
    console.log(books);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <div>{!books ? "Loading..." : books}</div>
                <button onClick={addBook}>Add</button>
                <button onClick={removeBook}>Remove</button>
                <button onClick={editBook}>Edit</button>
            </header>
        </div>
    );
}

export default App;