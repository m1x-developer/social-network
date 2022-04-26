import React from 'react';

const DialogMassageItem = ({messageText}) => {
    return (
        <div className="message">
            {messageText.map((e)=>{
                return(
                    <p key={e.id}>{e.text}</p>
                )
            })}

        </div>
    );
}

export default DialogMassageItem;
