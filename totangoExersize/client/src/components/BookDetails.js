import React, {useEffect, useState, Fragment} from "react";
import "../App.css";
import 'reactjs-popup/dist/index.css';
import Popup from "reactjs-popup";
import {useRest} from "../hooks/useRest";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import EditBook from "./EditBook";


const BookDetails = (book, open) => {
    const [isOpen, setIsOpen] = useState(open);

    return (
        <div>

            {isOpen &&
                <Popup open={true} onClose={() => setIsOpen(false)} position="right center"
                       closeOnEscape={true}>
                    <div>title: {book.title}</div>
                    <div>ISBN: {book.ISBN}</div>
                    <div>publicationDate: {book.publicationDate}</div>
                    <div>author: {book.author}</div>
                    <div>genre: {book.genre}</div>
                    <div>price: {book.price}</div>
                </Popup>}
        </div>
    );
}

export default BookDetails;