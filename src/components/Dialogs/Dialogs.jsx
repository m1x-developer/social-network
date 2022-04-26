import React from 'react';
import DialogMassageItem from "./MessageItem/MessageItem";
import DialogUser from "./DialogItem/DialogUser";


const Dialogs = ({data}) => {
    return (
        <div className="dialogs-items">
            <div className="all-dialogs">
                {data.userName.map((e) => {
                    return (
                        <DialogUser name={e.name}/>
                    )
                })}
            </div>
            <div className="messages">
                <DialogMassageItem messageText={data.textPost}/>
            </div>
        </div>
    );
};

export default Dialogs;
