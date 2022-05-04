const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    myPosts: [
        {id: 1, text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, minus"},
        {id: 2, text: "Lorem ipsum ur adipisicing elit. Cum, minus"},
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case ADD_POST :
            
            let newPost = {
                id: 20,
                text: state.newPostText
            }
            state.myPosts.push(newPost)
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT :
            state.newPostText = action.postMessage
            return state
        default:
            return state
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        postMessage: text
    }
}

export default profileReducer