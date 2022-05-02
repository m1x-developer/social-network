const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const profileReducer = (state, action) => {
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