import React from 'react';
import axios from "axios";

class Users extends React.Component {
    
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page={this.props.currentPage}&count=${ this.props.pageSize }`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
            
        })
    }
    
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${ pageNumber }&count=${ this.props.pageSize }`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }
    
    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return (
            <div>
                <div>
                    { pages.map(p => {
                        return <span className={ this.props.currentPage === p && 'selected-page' ,'number-pages' }
                                     key={ p }
                                     onClick={ (e) => this.onPageChanged(p) }>
                           { p }
                       </span>
                    }) }
                </div>
                
                { this.props.users.map(user => <div key={ user.id }>
                <span>
                    <div>
                        <img width={ 50 }
                             src={ user.photos.small != null ? user.photos.small : 'https://abrakadabra.fun/uploads/posts/2021-12/1640528661_1-abrakadabra-fun-p-serii-chelovek-na-avu-1.png' }
                             alt=""/>
                    </div>
                    <div>
                        {
                            user.followed ?
                                <button onClick={ () => this.props.unfollow(user.id) }>Follow</button>
                                :
                                <button onClick={ () => this.props.follow(user.id) }>Unfollow</button>
                        }
                       
                    </div>
                </span>
                    <span>
                    <span>
                        <div>{ user.name }</div>
                        <div>{ user.status }</div>
                    </span>
                    <span>
                        <div>{ "user.location.country" }</div>
                        <div>{ "user.location.city" }</div>
                    </span>
                </span>
                </div>) }
            </div>
        );
    }
}


export default Users;
