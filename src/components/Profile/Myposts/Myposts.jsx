import React from 'react';
import Post from "./Post/Post";

const Myposts = ({data, addPost}) => {
    let newPostElement = React.createRef()
    let addNewPost = () => {
        let text = newPostElement.current.value
        addPost(text)
        newPostElement.current.value = ''
    }

    return (
        <div>
            <div>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea ref={newPostElement}/>
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
