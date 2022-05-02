import React from 'react';
import Post from "./Post/Post";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";

const Myposts = ({state,dispatch}) => {
    
    let newPostElement = React.createRef()
    
    let addNewPost = () => {
        dispatch(addPostActionCreator())
    }

    let onChangePost = () => {
        let text = newPostElement.current.value
        let action = updateNewPostTextActionCreator(text);
        dispatch(action)
    }
    
    console.log()
    

    return (
        <div>
            <div>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea
                            ref={newPostElement}
                            onChange={onChangePost}
                            value={state.newPostText}
                        />
                    </div>
                    <div>
                        <button onClick={addNewPost}>Add post</button>
                    </div>
                </div>
            </div>
            <Post state={state}/>
        </div>

    );
};

export default Myposts;
