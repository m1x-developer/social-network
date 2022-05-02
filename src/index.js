import React from 'react'
import './index.css'
import store from "./redux/state";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById('root'))
let renderNew = (state) => {
    root.render(
        <BrowserRouter>
            <App
                state={ store.getState() }
                dispatch={ store.dispatch.bind(store)}
                store={store}
            />
        </BrowserRouter>
    )
    
}

renderNew(store.getState)
store.subscribe(renderNew)