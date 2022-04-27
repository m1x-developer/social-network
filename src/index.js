import React from 'react'
import './index.css'
import state, {subscribe, addPost, updateNewPostText} from "./redux/state";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById('root'))
let renderNew = (state) => {
    root.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </BrowserRouter>
    )
}

renderNew(state)
subscribe(renderNew)