import React from 'react';
import Post from "./Post/Post";

const Myposts = ({newPostText, posts, addNewPost,updateNewPostText}) => {
    
    let newPostElement = React.createRef()
    
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
                            ref={ newPostElement }
                            onChange={ onChangePost }
                            value={ newPostText }
                        />
                    </div>
                    <div>
                        <button onClick={ addNewPost }>Add post</button>
                    </div>
                </div>
            </div>
            <Post posts={ posts }/>
        </div>
    
    );
};

export default Myposts;
