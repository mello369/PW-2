import React from 'react';
import axios from 'axios';
import './Home.css';
import Share from './share/share'
import Post from './post/post';
import {useState,useEffect} from 'react';
import NavigavtionBar from '../NavBar/NavBar';
function Home() {

    const [Posts,setPosts] = useState([]);

    useEffect(()=>{//Will be called as soon as the page renders.
        const getPosts = async () => {
          const PostsfromServer = await fetchPosts()
          console.log(PostsfromServer)
          setPosts(PostsfromServer["posts"])
          
        }
         getPosts();
        
      },[])

      const fetchPosts = async() =>{
        const res = await fetch('http://localhost:3001/getPosts')
    const data = await res.json()
    return data
        
    }

    return (
        <>
        
        <div className="home">
            

            <Share />
          {  
          Posts.map(
                (post) =><Post name={post.name} date={post.date_time} image = {post.image_content} text ={post.text_content} company={post.company} />
            )
            
            }
            {/* <Post />
            <Post />
            <Post />
            <Post />
            <Post />
     */}
   
            
        </div>
    </>
    )
}

export default Home;
