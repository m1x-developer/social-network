import React, { Fragment } from 'react';
import Myposts from "./Myposts/Myposts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = ({data, addPost, updateNewPostText,dispatch}) => {
    return (
        <Fragment>
            <ProfileInfo/>
            <Myposts
                data={ data }
                addPost={ addPost }
                dispatch={ dispatch }
            />
        </Fragment>
    );
};

export default Profile;
