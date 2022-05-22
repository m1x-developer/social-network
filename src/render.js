import ReactDOM from "react-dom/client";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { addPost, updateNewPostText } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById('root'))
export let renderNew = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={ state } addPost={ addPost } updateNewPostText={ updateNewPostText }/>
            </BrowserRouter>
        </React.StrictMode>
    )
}