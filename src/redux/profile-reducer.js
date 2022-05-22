import { usersAPI } from "../components/api/api";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
    myPosts: [
        {id: 1, text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, minus"},
        {id: 2, text: "Lorem ipsum ur adipisicing elit. Cum, minus"},
    ],
    newPostText: '',
    profile:null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST : {
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
        case UPDATE_NEW_POST_TEXT : {
            
            return {
                ...state,
                newPostText: action.postMessage
            }
        }
        case SET_USER_PROFILE : {
            return {...state, profile:action.profile}
        }
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

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile: profile
    }
}

export const getUserProfileThunkCreator = (userid) => {
    return  (dispatch) => {
        usersAPI.getProfile(userid)
            .then(response => {
                dispatch(setUserProfile(response.data))
            })
    }
}


export default profileReducer