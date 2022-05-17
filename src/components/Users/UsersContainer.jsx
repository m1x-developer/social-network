import React from 'react';
import { connect } from "react-redux";
import {
    follow,
    setCurrentPage,
    setUsers,
    unfollow,
    setUsersTotalCount,
    toggleIsFetching
} from "../../redux/users-reducer";
import Users from "./Users";
import { getUsers, usersAPI } from "../../api/api";



class UsersContainer extends React.Component {
    
    componentDidMount() {
        this.props.toggleIsFetching(true)
            usersAPI.getUsers(this.pageNumber,this.pageSize).then(response => {
            this.props.setUsers(response.items)
            this.props.toggleIsFetching(false)
            this.props.setUsersTotalCount(response.totalCount)
            
        })
    }
    
    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        usersAPI.getUsers(pageNumber,this.pageSize).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.items)
        })
    }
    
    
    render() {
        return (
            <>
                { this.props.isFetching === true ? <p>LOADING...</p>  : <Users
                    totalUsersCount={ this.props.totalUsersCount }
                    pageSize={ this.props.pageSize }
                    currentPage={ this.props.currentPage }
                    onPageChanged={ this.onPageChanged }
                    users={ this.props.users }
                    follow={ this.props.follow }
                    unfollow={ this.props.unfollow }
                    isFetching={ this.props.isFetching }
                />}
                
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
        isFetching: state.usersPage.isFetching
    }
    
}

export default connect(mapStateToProps, {
    follow,
 unfollow,
    setUsers,
    setCurrentPage,
    setUsersTotalCount,
    toggleIsFetching
})(UsersContainer)
