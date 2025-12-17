import React from "react";
import Header from "./commons/Header";
import Footer from "./commons/Footer";

export default App = () => {
    // State counter
    const [counter, setCounter] = React.useState(0);
    const [message, setMessage] = React.useState("");

    return (
        <div>
            <Header
               message={message}
            />
            <input
                value={message}
                onChange={(event) => {
                    setMessage(event.target.value);
                }}
            />
            <button
                onClick={() => {
                    let _counter = counter;
                    _counter++;
                    setCounter(_counter);
                }}
            >
                Click Me!
            </button>
            {counter}
            <hr/>
            {message}
            <Footer/>
        </div>
    )
}