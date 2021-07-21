import React,{ useContext } from 'react';
import axios from 'axios';
import './Home.css';
import Share from './share/share'
import Post from './post/post';
import {useState,useEffect} from 'react';
import NavigavtionBar from '../NavBar/NavBar';
import Store from '../../Store';
import { GlobalContext } from '../../Store'
import { useHistory } from 'react-router-dom';
function Home() {
  const history = useHistory();
    const [Posts,setPosts] = useState([]);
    const [userId,setUserId] = useContext(GlobalContext);
    useEffect(async()=>{//Will be called as soon as the page renders.
        let user_id = localStorage.getItem('userId');
        if(user_id==null)
        {
          history.push("/login");
        }
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
console.log(Posts)
    return (
        <>
        
        <div className="home">
            

            <Share />
          {  
          Posts.map(
                (post) =><Post id ={post.post_id} name={post.name} date={post.date_time} image = {post.image_content} text ={post.text_content} company={post.company} />
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
