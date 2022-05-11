import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profile-reducer";

class ProfileContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserProfile(response.data)
            
        })
    }
    
    render() {
        return (
            <Profile { ...this.props } profile={this.props.profile}/>
        );
    }
}

let mapStatetoProps = (state) => ({
    profile: state.Profile.profile
    
})

export default connect(mapStatetoProps, {setUserProfile})(ProfileContainer);
