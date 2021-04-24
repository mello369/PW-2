import React from 'react';
import './Post.css';
import Avatar from '@material-ui/core/Avatar';

function Post({imageUrl,username,text}) {
    return (
        <div className="post">
            <div className="post__header">
            <Avatar 
            className = "post__avatar"
            alt={username}
            src ="./images"
            />
            <h4>{username}</h4>
            </div>
            
            {/*header -> avatar + username */}
            <img className="post__image"
            src={imageUrl} alt=""/>
            {
                /* image*/
            }
            <h5 className="post__text"><strong> {username} </strong> {text} </h5>
            {/*username + caption*/}
        </div>
    )
}

export default Post
