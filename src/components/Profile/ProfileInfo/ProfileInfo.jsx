import React from 'react';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <div>Loading...</div>
    }
    return (
        <div className="profile-block">
            <div className="profile-wrapper">
                <div className="profile-foto">
                    <img src={props.profile.photos.large} alt=""/>
                </div>
                <div className="profile-fio">
                    {props.profile.fullName}
                </div>
            </div>
            <div className="profile-description">{props.profile.aboutMe}</div>
        </div>
    );
};

export default ProfileInfo;
