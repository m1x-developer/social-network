import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { testDEAC, testINAC } from "../redux/test-reducer";

const Test = (props) => {
    let newPostElement = React.createRef()
    let onChangePost = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
        
    }
    const dispatch = useDispatch()
    const cash = useSelector(state => state.test.value)
    console.log(cash)
    
 
    
    const plusF = (value) => {
        dispatch(testINAC(value))
    }
    const minusF = (value) => {
        dispatch(testDEAC(value))
    }
    
    return (
        <>
            
            {/*{props.posts.map((e)=> {*/ }
            {/*    return <div key={e.id}>{e.text}</div>*/ }
            {/*})}*/ }
            
            <textarea
                ref={ newPostElement }
                onChange={ onChangePost }
                value={ props.newPostText }
            />
            <button onClick={ () => {
                plusF(Number(prompt()))
            } }>+
            </button>
            <button onClick={ () => {
                minusF(Number(prompt()))
            } }>-
            </button>
        </>
    );
};

export default Test;
