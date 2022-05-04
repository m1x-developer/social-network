import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import Myposts from "./Myposts";

const MypostsContainer = ({store}) => {
    let state = store.getState()
    
    let addNewPost = () => {
        store.dispatch(addPostActionCreator())
    }
    
    let onChangePost = (text) => {
        let action = updateNewPostTextActionCreator(text);
        store.dispatch(action)
    }
    
    return (
        <Myposts
            updateNewPostText={ onChangePost }
            addNewPost={ addNewPost }
            posts={ state.Profile.myPosts }
            newPostText={ state.Profile.newPostText }
        />
    )
    
};

export default MypostsContainer;
