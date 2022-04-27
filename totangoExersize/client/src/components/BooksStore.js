import React from "react";
import "../App.css";
import 'reactjs-popup/dist/index.css';
import {useRest} from "../hooks/useRest"
import Book from "./book";

const BooksStore = ({books}) => {
    const {addBook} = useRest();

    const book = {
        title: 'title ggg ',
        description: 'description ggg',
        "ISBN": 5555,
        author: 'web page',
        "publicationDate": '01.01.2001',
        genre: 2,
        price: 100
    };

    const bookItems = books?.map((b, ind) => <Book key={ind} {...b}/>);

    return (
        <div className="App">
            <div>{bookItems}</div>
            <button onClick={() => addBook(book)}>Add</button>
        </div>
    );
}

export default BooksStore;