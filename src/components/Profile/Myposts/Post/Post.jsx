import React from 'react';

const Post = ({data}) => {
    return (
        data.map((e)=>{
            return(
                <div className="post">
                    <img src="https://abrakadabra.fun/uploads/posts/2021-12/1640528661_1-abrakadabra-fun-p-serii-chelovek-na-avu-1.png" alt=""/>
                    <p>{e.text}</p>
                    <p>like</p>
                </div>
            )
        })
    );
};

export default Post;