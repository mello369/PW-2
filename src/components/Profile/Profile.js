import './Profile.css';
import Post from '../Home/post/post';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useState, useEffect } from 'react';
function Profile() {
    const id=8;
    const [Posts, setPosts] = useState([]);
    const [profileData,setProfile]=useState([]);

    useEffect(() => {//Will be called as soon as the page renders.

        const getPosts = async () => {
            const PostsfromServer = await fetchPosts()
            setPosts(PostsfromServer["posts"])

        }
        getPosts();
        ///
        const getProfile=async()=>{
            const res=await fetch('http://localhost:3001/profile/'+id)
            const data = await res.json()
            //const [user]=data.result
            setProfile(data[0])
        }
        getProfile();

    }, [])
    
   
    const fetchPosts = async () => {
        const res = await fetch('http://localhost:3001/getUserPosts/'+id)
        const data = await res.json()
        return data
    }
    console.log(profileData.name)
    return (
        <div className="profile">
            <div className="container">
                <a href="/EditProfile"><button id="edit-button">Edit</button></a>
                <h3>Profile</h3>

                <div className="profile-data">
                    {/*<div id="profile-img"></div>*/}
                    <AccountCircleIcon id="profile-img" />
                    <div id="name">{profileData.name}</div>

                    <div id="branch">BMSCE,{profileData.branch}</div>
                    <div id="year">{Number(profileData.grad_year)-Number(4)}-{profileData.grad_year}</div>
                    <hr className="left"></hr>
                    <div id="desc">
                      {profileData.description}
                    </div>
                    <hr className="left"></hr>
                    <div id="work">
                        Currently working in<br></br>
                        {profileData.company}
                    </div>
                </div>
                <hr className="left"></hr>
                <h4>Posts Added By Me</h4>
                {/* <div className="post"></div>
            <div className="post"></div>
            <div className="post"></div> */}
                {
                    Posts.map(
                        (post) => <Post name={post.name} date={post.date_time} image={post.image_content} text={post.text_content} company={post.company} />
                    )
                }

            </div>
        </div>
    )
}

export default Profile