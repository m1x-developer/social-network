import React from 'react';
import { sendMessageActionCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";


let mapStateToProps = (state) => {
    return {
        state: state.Dialogs
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBodyCreator: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => {
           dispatch (sendMessageActionCreator())
        }
    }
}
let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


export default DialogsContainer;
