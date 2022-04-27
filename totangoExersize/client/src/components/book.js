import React, {useEffect, useState} from "react";
import "../App.css";
import 'reactjs-popup/dist/index.css';
import Popup from "reactjs-popup";
import {useRest} from "../hooks/useRest"

const Book = (book) => {
    const {removeBook, editBook} = useRest();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {

    }, []);


    return (
        <div>
            <div>Title: {book.title} ISBN: {book.ISBN} Author: {book.author}
                <button onClick={() => removeBook(book.ISBN)}>Remove</button>
                <button onClick={() => editBook(book)}>Edit</button>
                <button onClick={() => setIsOpen(true)}>show</button>
                {isOpen &&
                    <Popup open={isOpen} onClose={() => setIsOpen(false)} position="right center" closeOnEscape={true}>
                        <div>title: {book.title}</div>
                        <div>ISBN: {book.ISBN}</div>
                        <div>publicationDate: {book.publicationDate}</div>
                        <div>author: {book.author}</div>
                        <div>genre: {book.genre}</div>
                        <div>price: {book.price}</div>
                    </Popup>}
            </div>
        </div>
    );
}

export default Book;