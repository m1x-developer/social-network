
import ReactDOM from "react-dom/client";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {addPost} from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'))
export let renderNew = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost}/>
            </BrowserRouter>
        </React.StrictMode>
    )
}