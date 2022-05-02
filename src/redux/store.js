import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        Profile: {
            myPosts: [
                {id: 1, text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, minus"},
                {id: 2, text: "Lorem ipsum ur adipisicing elit. Cum, minus"},
                {id: 3, text: "Lor adipisicing elit. Cum, minus"},
                {id: 4, text: "Lor minus"}
            ],
            newPostText: ''
        },
        Dialogs: {
            userName: [
                {id: 1, name: "Max"},
                {id: 2, name: "Nikita"},
                {id: 3, name: "sasha"},
                {id: 4, name: "kirill"}
            ],
            textPost: [
                {id: 1, text: "bla"},
                {id: 2, text: "bla bla "},
                {id: 3, text: "bla bla bla"},
                {id: 4, text: "bla bla bla"},
            ],
            newMessageBody: ""
            
        },
        sidebar: {}
    },
    _renderNew() {
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._renderNew = observer
    },
    dispatch(action) {
        this._state.Profile = profileReducer(this._state.Profile, action)
        this._state.Dialogs = dialogsReducer(this._state.Dialogs, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        //observer
        this._renderNew(this._state)
    }
}


window.store = store
export default store
