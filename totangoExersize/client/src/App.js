import React, {useEffect, useState} from "react";
import "./App.css";
import 'reactjs-popup/dist/index.css';
import {useRest} from "./hooks/useRest"
import BooksStore from "./components/BooksStore";

const App = () => {
    const {getBooks} = useRest();
    const [data, setData] = useState(null);

    useEffect/*useMemo*/(() => {
        const fetchData = async () =>
            getBooks().then((res) =>
                res.json())
                .then((data) =>
                    setData(data.data)
                );

        fetchData();
        console.log("fetching");
    }, []);


    return (
        <div className="App">
            <header className="App-header">
                <div>{!data ? "Loading..." : <BooksStore books={data}/>}</div>
            </header>
        </div>
    );
}

export default App;