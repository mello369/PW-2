import logo from './logo.svg';
import './App.css';
import Post from './components/Post';
import {useState} from 'react';
import NavBar from './components/NavBar/NavBar';
import Ask from './components/Ask/Ask';
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile';
import EditProfile from './components/EditProfile/EditProfile';
import SignUp from './components/SignUp/SignUp';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import Branches from './components/Branches/Branches';
import AddPost from './components/AddPost/AddPost'
import {Route,Link} from 'react-router-dom';

function App() {
  const [posts,setPosts]=useState([
    {
      username:"Naman",
      imageUrl:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1504&q=80",
      text: "Atlassian coding interview"

    },
    {
      username:"Saffan",
      imageUrl:"https://images.unsplash.com/photo-1562813733-b31f71025d54?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1498&q=80",
      text: "Samsung coding interview"

    },
    {
      username:"Saffan",
      imageUrl:"",
      text:" Adobe coding interview"

    }
  ]);
  return (
    <div className="app">
      {/*
      <div className="app__header">
      <img className ="app__headerImage" src={logo} alt=""/>
      <h3>Placement Experience</h3>

      </div>
      {
        
      }
      {/
        posts.map(
            (post)=>
                <Post imageUrl={post.imageUrl} username={post.username} text={post.text}  />
            
        )
        
      }

     <NavBar sticky="top"/>
      <Ask/>
    <Profile/>
    <SignUp/>
    <ForgotPassword/>
   <Login/>
    
    */}

     <NavBar/>    
  
    <Route exact path="/" component={Branches}/>
    <Route exact path="/login" component={Login}/>
    <Route  exact path="/signup" component={SignUp}/>
    <Route exact path="/ask" component={Ask}/>
    <Route exact path="/profile" component={Profile}/>
    <Route exact path="/addpost" component={AddPost}/>
    <Route exact path="/EditProfile" component={EditProfile}/>
    </div>
  );
}

export default App;

