import './App.css';
import {useState,useEffect} from 'react';
import NavBar from './components/NavBar/NavBar';
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile';
import EditProfile from './components/EditProfile/EditProfile';
import SignUp from './components/SignUp/SignUp';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import QnA from './components/QnA/QnA';
import AddPost from './components/AddPost/AddPost'
import {Route,Link} from 'react-router-dom';
import Home from './components/Home/Home';
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
    <NavBar/> 
    <Route exact path="/" component={Home}/>
    <Route exact path="/QnA" component={QnA}/>
    <Route exact path="/login" component={Login}/>
    <Route exact path="/signup" component={SignUp}/>
    <Route exact path="/profile" component={Profile}/>
    <Route exact path="/addpost" component={AddPost}/>
    <Route exact path="/EditProfile" component={EditProfile}/>
    </div>
  );
}

export default App;

