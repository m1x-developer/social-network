import React from 'react';
import { connect } from "react-redux";
import test from './test'
import { addPostActionCreator, updateNewPostTextActionCreator } from "../redux/profile-reducer";


const mapStateToProps = (state) => {
    return {
        posts: state.test.posts,
        newPostText: state.newPostText
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action)
        },
        addNewPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}

const TestConrainer = connect(mapStateToProps, mapDispatchToProps)(test)

export default TestConrainer;
