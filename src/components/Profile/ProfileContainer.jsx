import React from 'react';
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfileThunkCreator, setUserProfile } from "../../redux/profile-reducer";
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import { usersAPI } from "../api/api";

// wrapper to use react router's v6 hooks in class component(to use HOC pattern, like in router v5)
function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                { ...props }
                router={ {location, navigate, params} }
            />
        );
    }
    
    return ComponentWithRouterProp;
}


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = Object.values(this.props.router.params)
        userId = userId[0]
        if (!userId) {
            userId = 2
        }
        this.props.getUserProfileThunkCreator(userId)
    }
    
    render() {
        //redirect
        if(this.props.isAuth === false){
            return <Navigate to={"/login"}/>
        }
        return (
            <Profile { ...this.props } profile={ this.props.profile }/>
        );
    }
}

let mapStatetoProps = (state) => ({
    profile: state.Profile.profile,
    isAuth: state.auth.isAuth
    
})


export default connect(mapStatetoProps, {getUserProfileThunkCreator})(withRouter(ProfileContainer));

