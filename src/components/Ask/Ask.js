import React from 'react';
import './Ask.css';
import {Card,Button} from 'react-bootstrap';
const branch=['CSE','ISE','ECE','ME','BT','AE','CVL'];
const branchList=branch.map((branch)=>
<option value={branch}>{branch}</option>
)
function Ask()
{
return(
<div className='box'>
<Card className="text-center">
  <Card.Header><Card.Title>Ask your question</Card.Title></Card.Header>
  <Card.Body>
    <Card.Text>
      Make sure the question does not exist already
    </Card.Text>
    <textarea id="question"></textarea>
    <br></br>
    <label htmlFor='branch'>Branch</label><br></br>
    <select name='branch' id='branch'>
          {branchList}
    </select>
 
    
  </Card.Body>
  <Button>Submit</Button>
</Card>
</div>
)
}
export default Ask