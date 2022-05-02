import React, { Fragment } from 'react';
import Myposts from "./Myposts/Myposts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = ({state, addPost, updateNewPostText,dispatch}) => {
    return (
        <Fragment>
            <ProfileInfo/>
            <Myposts
                state={ state }
                addPost={ addPost }
                dispatch={ dispatch }
            />
        </Fragment>
    );
};

export default Profile;
