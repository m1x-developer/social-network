import React from 'react';
import { Link } from "react-router-dom";

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
                    {/*<Link className="link" to={'/profile/' + user.id}>*/}
                    <Link className="link" to={'/profile/2'}>
                        <div>
                        <img width={ 50 }
                             src={ user.photos.small != null ? user.photos.small : 'https://abrakadabra.fun/uploads/posts/2021-12/1640528661_1-abrakadabra-fun-p-serii-chelovek-na-avu-1.png' }
                             alt=""/>
                    </div>
                    </Link>
                    <div>
                        {
                            user.followed ?
                                <button onClick={ () => props.unfollow(user.id) }>Follow</button>
                                :
                                <button onClick={ () => props.follow(user.id) }>Unfollow</button>
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
