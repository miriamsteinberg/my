import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch("http://localhost:3002/books")
            .then((res) =>
                // console.log(res)
                res.json()
            )
            .then((data) =>
                setData(data.data)
            );
    }, []);


    const books = data?.map((b, ind) => <div key={ind}>ISBN: {b.ISBN} Author: {b.author}</div>);
    console.log(books);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <div>{!books ? "Loading..." : books}</div>
            </header>
        </div>
    );
}

export default App;