let renderNew = () => {

}

let state = {
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
            {id: 4, text: "bla bla bla"}
        ]
    },
}

export const addPost = () => {
    let newPost = {
        id: 20,
        text: state.Profile.newPostText
    }
    state.Profile.myPosts.push(newPost)
    state.Profile.newPostText = ''
    renderNew(state)
}

export const updateNewPostText = (postMessage) => {
    state.Profile.newPostText = postMessage
    renderNew(state)
}

export const subscribe = (observer) => {
    renderNew = observer
}


window.state = state
export default state
