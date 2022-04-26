import React, {Fragment} from 'react';
import Myposts from "./Myposts/Myposts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({data,addPost}) => {

    return (
        <Fragment>
            <ProfileInfo/>
            <Myposts data={data} addPost={addPost}/>
        </Fragment>
    );
};

export default Profile;
