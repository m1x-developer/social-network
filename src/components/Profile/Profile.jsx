import React, { Fragment } from 'react';
import Myposts from "./Myposts/Myposts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MypostsContainer from "./Myposts/MypostsContainer";


const Profile = (props) => {
    return (
        <Fragment>
            <ProfileInfo profile={props.profile}/>
            <MypostsContainer/>
        </Fragment>
    );
};

export default Profile;