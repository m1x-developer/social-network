import React from 'react';
import {Link} from "react-router-dom";

const DialogUser = ({name}) => {
    let  path = `/messages/${name}`
    
    return (
        <div className="dialog">
            <Link to={path} >{name}</Link>
        </div>
    );
}

export default DialogUser;
