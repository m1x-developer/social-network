import React from 'react';
import { Link, NavLink } from "react-router-dom";
import axios from "axios";

const Users = (props) => {
    //pagination
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    //pagination END
    
    return (
        <div>
            <div style={ {display: 'flex', flexWrap: 'wrap'} }>
                { pages.map(p => {
                    return <div className={ props.currentPage === p ? `selected-page number-pages` : 'number-pages' }
                                key={ p }
                                onClick={ (e) => props.onPageChanged(p) }>
                        { p }
                    </div>
                }) }
            </div>
            
            { props.users.map(user => <div key={ user.id }>
                <span>
                    <NavLink to={ `/profile/` + user.id }>
                        <div>
                        <img width={ 50 }
                             src={ user.photos.small != null ? user.photos.small : 'https://abrakadabra.fun/uploads/posts/2021-12/1640528661_1-abrakadabra-fun-p-serii-chelovek-na-avu-1.png' }
                             alt=""/>
                    </div>
                    </NavLink>
                    <div>
                        {
                            user.followed ?
                                <button onClick={ () =>
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${ user.id }`,
                                        {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY":"b670215c-ddc3-47bc-b6a2-e3183e8a3d81"
                                            }
                                        })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unfollow(user.id)
                                            }
                                        })
                                }>Unfollow</button>
                                :
                                <button onClick={ () =>
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${ user.id }`,
                                        {},
                                        {
                                            withCredentials: true,
                                             headers: {
                                                "API-KEY":"b670215c-ddc3-47bc-b6a2-e3183e8a3d81"
                                             }
                                        })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(user.id)
                                            }
                                        })
        
                                }>Follow</button>
                                
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
};

export default Users;
