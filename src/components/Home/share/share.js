import React from 'react'
import "./share.css";
import {PermMedia} from "@material-ui/icons"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
export default function Share() {
    return (
        <div className="share">
            <div className="shareWrapper">
            <div className="shareTop">
                 <img className = "shareProfileImg" src="/assets/image1.jpg" alt=""/> 
                <input 
                placeholder="Add Post"
                type="text" className = "shareInput" />
                
            </div>
            <hr className="shareHr"/>
            <div className="shareBottom">
            <div className="shareOptions">
                <PermMedia />
                <span></span>
            </div>
            
            <ExpandMoreIcon className="shareExpand"/>
            
            </div>
            </div>
        </div>
    )
}


