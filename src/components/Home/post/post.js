import React from 'react'
import './post.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {MoreVert} from '@material-ui/icons';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
export default function Post({name,date,image,text,company}) {
    return (
        <div className="post">
            <div className="postWrapper">
            
            <div className="postTop">
                <div className="postTopLeft">
                <AccountCircleIcon style={{fontSize:50}}className="postProfileImage"/>
                <span className="postUsername">{name}</span>
                <span className="postDate">{date}</span>
                </div>
                <div className="postTopRight">

                    <MoreVert/>

                </div>
            </div>

            <div className="postCenter">
                <img src={image} 
                alt="" className="postImage"/>
                
                <div className="postContent">
                   {text}
                </div>
            
            
            
            
            </div>
            <div className="postBottom">
            <div className="postBottomLeft">
            <FavoriteIcon  className="postLike"/>
            {/* <ChatBubbleIcon className="postComment"/> */}
            <span className="postLikeCounter">10</span>
            </div>
            <div className="postBottomRight">
                <span className="postCommentText">9 comments</span>
            </div>


            </div>

            </div>
        </div>
    )
}
