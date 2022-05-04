import React from 'react';
import DialogMassageItem from "./MessageItem/MessageItem";
import DialogUser from "./DialogItem/DialogUser";
import { sendMessageActionCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = ({dispatch,store }) => {
    let data = store.getState().Dialogs
    
    let onSendMessageClick = () => {
        dispatch(sendMessageActionCreator())
        
    }
    let onNewMessageChange = (body) => {
        dispatch(updateNewMessageBodyCreator(body))
    }
    
    return (<Dialogs  updateNewMessageBodyCreator={onNewMessageChange} sendMessage={onSendMessageClick} Dialogs={data}/>);
};

export default DialogsContainer ;
