import React from 'react';

const Test = (props) => {
    console.log(props)
    let newPostElement = React.createRef()
    let onChangePost = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
        
    }
    
    console.log(props)
    return (
       <>
           
           {props.posts.map((e)=> {
               return <div key={e.id}>{e.text}</div>
           })}
           
           <textarea
               ref={newPostElement}
               onChange={onChangePost}
               value={props.newPostText}
           />
           <button onClick={props.newPostText}>click</button>
       </>
    );
};

export default Test;
