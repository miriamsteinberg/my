import React, {useEffect, useState, Fragment} from "react";
import "../App.css";
import 'reactjs-popup/dist/index.css';
import Popup from "reactjs-popup";
import {useRest} from "../hooks/useRest";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import EditBook from "./EditBook";
import BookDetails from "./BookDetails";


const Book = (book) => {
    const {removeBook, editBook} = useRest();
    const [isOpen, setIsOpen] = useState(false);
    const [isEdit, setIsEdit] = useState(false);

    useEffect(() => {

    }, []);

    const textChange = () => console.log('change');


    return (
        <div>
            <div>Title: {book.title} ISBN: {book.ISBN} Author: {book.author}
                <Button variant="contained" onClick={() => removeBook(book.ISBN)}>Remove</Button>
                <Button variant="contained" onClick={() => setIsEdit(true)}>Edit</Button>
                {isEdit && <EditBook {...book} editMode={true}/>}
                <Button onClick={() => setIsOpen(true)}>Show</Button>
                {isOpen && <BookDetails {...book} open={true}/>}
            </div>
        </div>
    );
}

export default Book;