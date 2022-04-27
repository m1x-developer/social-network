import React from 'react';
import Post from "./Post/Post";
import {updateNewPostText} from "../../../redux/state";

const Myposts = ({data, addPost, updateNewPostText}) => {


    let newPostElement = React.createRef()
    let addNewPost = () => {
        addPost()
    }

    let onChangePost = () => {
        let text = newPostElement.current.value
        updateNewPostText(text)
    }

    return (
        <div>
            <div>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea
                            ref={newPostElement}
                            onChange={onChangePost}
                            value={data.newPostText}
                        />
                    </div>
                    <div>
                        <button onClick={addNewPost}>Add post</button>
                    </div>
                </div>
            </div>
            <Post data={data}/>
        </div>

    );
};

export default Myposts;
