import React from 'react';
import DialogMassageItem from "./MessageItem/MessageItem";
import DialogUser from "./DialogItem/DialogUser";
import { sendMessageActionCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";


const Dialogs = ({dispatch,store }) => {
    let data = store.getState().Dialogs
    
    let onSendMessageClick = () => {
        dispatch(sendMessageActionCreator())
        
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value
        dispatch(updateNewMessageBodyCreator(body))
       
    }
   
    
    let dialogElements = data.userName.map((e) => {
        return (
            <DialogUser name={ e.name } key={e.id}/>
        )
    })
    let messageElements = <DialogMassageItem messageText={ data.textPost }/>
    
    let newMessageBody = data.newMessageBody
    
    
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
