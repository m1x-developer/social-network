import React from 'react';
import DialogMassageItem from "./MessageItem/MessageItem";
import DialogUser from "./DialogItem/DialogUser";
import { Navigate } from "react-router-dom";



const Dialogs = (props) => {
    
    let onSendMessageClick = () => {
       props.sendMessage()
        
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.updateNewMessageBodyCreator(body)
        
    }
    
    let dialogElements = props.state.userName.map((e) => {
        return (
            <DialogUser name={ e.name } key={e.id}/>
        )
    })
    
    let messageElements = <DialogMassageItem messageText={ props.state.textPost }/>
    
    let newMessageBody = props.state.newMessageBody
    
    //redirect 
    if(props.isAuth === false){
        return <Navigate to={"/login"}/>
    }
    
    
    
    
    return (
        <div className="dialogs-items">
            <div className="all-dialogs">
                { dialogElements }
            </div>
            <div className="messages">
                { messageElements }
                <div><textarea value={ newMessageBody } placeholder='Message' onChange={ onNewMessageChange }/></div>
                <div>
                    <button onClick={ onSendMessageClick }>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
