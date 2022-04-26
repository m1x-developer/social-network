import React from 'react';
import {Link} from "react-router-dom";

const DialogUser = ({name}) => {

    const path = `/messages/${name}`
    return (
        <div className="dialog">
            <Link exact to={path}>{name}</Link>
        </div>
    );
}

export default DialogUser;
