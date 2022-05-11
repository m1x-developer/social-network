const TEST_REDUCER_ADD = 'TEST_REDUCER_ADD'
const TEST_REDUCER_UPDATE = 'TEST_REDUCER_ADD'

let initialState = {
    posts : [
        {id: 1, text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, minus"},
    ],
    zanulenie : ''
}

const testReducer = (state = initialState, action) => {
    switch (action.type) {
        case TEST_REDUCER_ADD : {
            let newPost = {
                id: 20,
                text: state.newPostText
            }
            return {
                ...state,
                myPosts: [...state.myPosts, newPost],
                newPostText: ''
            }
        }
        case TEST_REDUCER_UPDATE : {
            return {
                ...state,
                newPostText: action.postMessage
            }
        }
       
        default:
            return state
    }
}



export const addPostActionCreator = () => {
    return {
        type: TEST_REDUCER_ADD
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: TEST_REDUCER_UPDATE,
        postMessage: text
    }
}



export default testReducer