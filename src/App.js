import './App.css';
import {useState,useEffect} from 'react';
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
import Home from './components/Home/Home';

function App() {
  

  return (
    <div className="app">
    <NavBar/> 
    <Route exact path="/" component={Home}/>
    <Route exact path="/branches" component={Branches}/>
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

