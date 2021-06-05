import React from 'react';
import './Home.css';
import Share from './share/share'
import Post from './post/post';
import NavigavtionBar from '../NavBar/NavBar';
function Home() {
    return (
        <>
        
        <div className="home">
            

            <Share />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
    
   
            
        </div>
    </>
    )
}

export default Home;
