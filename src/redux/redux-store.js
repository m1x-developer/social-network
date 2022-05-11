import { combineReducers, createStore } from "redux";

import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import testReducer from "./test-reducer";


let reducers = combineReducers({
    Profile: profileReducer,
    Dialogs: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    test:testReducer
    
})

let store = createStore(reducers)
window.store = store

export default store