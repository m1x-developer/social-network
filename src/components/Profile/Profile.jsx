import React, {Fragment} from 'react';
import Myposts from "./Myposts/Myposts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = ({data, addPost, updateNewPostText}) => {


    return (
        <Fragment>
            <ProfileInfo/>
            <Myposts data={data}
                     addPost={addPost}
                     updateNewPostText={updateNewPostText}
            />
        </Fragment>
    );
};

export default Profile;
