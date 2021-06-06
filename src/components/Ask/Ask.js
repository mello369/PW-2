import {React,useState} from 'react';
import Axios from 'axios';
import './Ask.css';

import {Card,Button} from 'react-bootstrap';
const branch=['CSE','ISE','ECE','ME','BT','AE','CVL'];
const branchList=branch.map((branch)=>
<option value={branch}>{branch}</option>
)
function Ask()
{
  const url="http://localhost:3001/ask/ask-submit";
  const [data,setData]=useState({
    user_id:8,
    question:""
  })
  function handle(e){
    const newData={...data};
    newData[e.target.id]=[e.target.value];
    setData(newData);
    console.log(newData.question);
  }

  function submit(e)
  {
    e.preventDefault();
    console.log("DDDDDDDD");
    try{
    Axios.post(url,{
      user_id:data.user_id,
      question:data.question
    }).then(res=>{
      console.log(res.data);
      alert("Submitted Sucessfully!")
    })
  }
  catch(e)
  {
    console.log(e)
  }
  }


return(
<div className='box'>
<Card className="text-center">
  <form>
  <Card.Header><Card.Title>Ask your question</Card.Title></Card.Header>
  <Card.Body>
    <Card.Text>
      Make sure the question does not exist already
    </Card.Text>
    <textarea onChange={(e)=>handle(e)} id="question" value={data.question}></textarea>
    <br></br>
    <label htmlFor='branch'>Branch</label><br></br>
    <select name='branch' id='branch'>
          {branchList}
    </select>
 
    
  </Card.Body>
  <Button onClick={(e)=>submit(e)}>Submit</Button>
  </form>
</Card>
</div>
)
}
export default Ask