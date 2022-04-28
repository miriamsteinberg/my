import React, {useEffect, useState} from "react";
import "../App.css";
import 'reactjs-popup/dist/index.css';
import {useRest} from "../hooks/useRest"
import Book from "./book";
import Button from "@mui/material/Button";
import EditBook from "./EditBook";

const BooksStore = ({books}) => {
    const {addBook} = useRest();
    const [isAdd, setIsAdd] = useState(false);

    const book = {
        title: 'title ggg ',
        description: 'description ggg',
        "ISBN": books[books.length - 1]?.ISBN + 1 | 1,
        author: 'web page',
        "publicationDate": '01.01.2001',
        genre: 2,
        price: 100
    };

    const bookItems = books?.map((b, ind) => <Book key={ind} {...b}/>);

    return (
        <div className="App">
            <div>{bookItems}</div>
            <Button variant="contained" onClick={() => setIsAdd(true)}>Add</Button>
            {isAdd && <EditBook {...book} editMode={false}/>}

        </div>
    );
}

export default BooksStore;