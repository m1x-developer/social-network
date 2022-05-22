import React from 'react';
import { connect } from "react-redux";
import {
    follow,
    setCurrentPage,
    setUsers,
    unfollow,
    toggleFollowingProgress,
    getUsersThunkCreator, unFollowThunkCreator, followThunkCreator
} from "../../redux/users-reducer";
import Users from "./Users";


class UsersContainer extends React.Component {
    
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.pageSize)
        // this.props.toggleIsFetching(true)
        // usersAPI.getUsers(this.props.currentPage,this.pageSize).then(response => {
        //     this.props.setUsers(response.items)
        //     this.props.toggleIsFetching(false)
        //     this.props.setUsersTotalCount(response.totalCount)
        //
        // })
    }
    
    onPageChanged = (pageNumber) => {
        this.props.getUsersThunkCreator(pageNumber, this.pageSize)
        // this.props.toggleIsFetching(true)
        // this.props.setCurrentPage(pageNumber)
        // usersAPI.getUsers(pageNumber,this.pageSize).then(response => {
        //     this.props.toggleIsFetching(false)
        //     this.props.setUsers(response.items)
        // })
    }
    
    
    render() {
        return (
            <>
                { this.props.isFetching === true ? <p>LOADING...</p> : <Users
                    totalUsersCount={ this.props.totalUsersCount }
                    pageSize={ this.props.pageSize }
                    currentPage={ this.props.currentPage }
                    onPageChanged={ this.onPageChanged }
                    users={ this.props.users }
                    isFetching={ this.props.isFetching }
                    toggleFollowingProgress={ this.props.toggleFollowingProgress }
                    followingInProgress={ this.props.followingInProgress }
                    unFollowThunkCreator={this.props.unFollowThunkCreator}
                    followThunkCreator={this.props.followThunkCreator}
                /> }
            
            </>
        );
        
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
    
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    toggleFollowingProgress,
    getUsersThunkCreator,
    unFollowThunkCreator,
    followThunkCreator
})(UsersContainer)
