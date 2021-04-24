import logo from './logo.svg';
import './App.css';
import Post from './components/Post'
import {useState} from 'react';
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
      
      <div className="app__header">
      <img className ="app__headerImage" src={logo} alt=""/>
      <h3>Placement Experience</h3>

      </div>
      {
        /*header*/
      }
      {/*Posts*/
        posts.map(
            (post)=>
                <Post imageUrl={post.imageUrl} username={post.username} text={post.text}  />
            
        )
        
      }

       
    </div>
  );
}

export default App;
