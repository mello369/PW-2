import React from 'react'
import './post.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {MoreVert} from '@material-ui/icons';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
export default function Post() {
    return (
        <div className="post">
            <div className="postWrapper">
            
            <div className="postTop">
                <div className="postTopLeft">
                <AccountCircleIcon style={{fontSize:50}}className="postProfileImage"/>
                <span className="postUsername">Naman</span>
                <span className="postDate">5 mins ago</span>
                </div>
                <div className="postTopRight">

                    <MoreVert/>

                </div>
            </div>

            <div className="postCenter">
                <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcHV0ZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                alt="" className="postImage"/>
                
                <div className="postContent">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque magni quisquam maxime! Veritatis blanditiis ipsam, in dolores adipisci aperiam modi totam molestias reiciendis error earum nesciunt asperiores minima quis tempora!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque magni quisquam maxime! Veritatis blanditiis ipsam, in dolores adipisci aperiam modi totam molestias reiciendis error earum nesciunt asperiores minima quis tempora!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque magni quisquam maxime! Veritatis blanditiis ipsam, in dolores adipisci aperiam modi totam molestias reiciendis error earum nesciunt asperiores minima quis tempora!
                    
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
