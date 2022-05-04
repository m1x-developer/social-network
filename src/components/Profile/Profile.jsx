import React, { Fragment } from 'react';
import Myposts from "./Myposts/Myposts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MypostsContainer from "./Myposts/MypostsContainer";


const Profile = ({store}) => {
    return (
        <Fragment>
            <ProfileInfo/>
            <MypostsContainer store={ store }/>
        </Fragment>
    );
};

export default Profile;