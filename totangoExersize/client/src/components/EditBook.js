import React, {useEffect, useState, Fragment} from "react";
import "../App.css";
import 'reactjs-popup/dist/index.css';
import Popup from "reactjs-popup";
import {useRest} from "../hooks/useRest";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {typeImplementation} from "@testing-library/user-event/dist/type/typeImplementation";


const EditBook = (bookItem) => {
    const {editBook, addBook} = useRest();
    const [book, setBook] = useState(bookItem);

    const textChange = (edittedBook) => { // TODO form values hanle -like formik
        setBook({...edittedBook});
    };


    return (
        <div>
            <div>
                <TextField name={'title'} value={book.title}
                           onChange={(text) => textChange({...book, title: text.target.value})}/>
                <TextField name={'description'} value={book.description}
                           onChange={(text) => textChange({...book, description: text.target.value})}/>
                <TextField name={'ISBN'} value={book.ISBN}/>
                <TextField name={'publicationDate'} value={book.publicationDate}
                           onChange={(text) => textChange({...book, publicationDate: text.target.value})}/>
                <TextField name={'author'} value={book.author}
                           onChange={(text) => textChange({...book, author: text.target.value})}/>
                <TextField name={'genre'} value={book.genre}
                           onChange={(text) => textChange({...book, genre: text.target.value})}/>
                <TextField name={'price'} value={book.price}
                           onChange={(text) => textChange({...book, price: text.target.value})}/>
                <Button variant="contained" onClick={() => bookItem.editMode? editBook(book) : addBook(book)}>{bookItem.editMode? 'Save' : 'Add'}</Button>
            </div>
        </div>
    );
}

export default EditBook;