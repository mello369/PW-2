import React from 'react';
import './AddPost.css';
import {Card,Button} from 'react-bootstrap';

function AddPost()
{
return(
<div className='addpost'>
<Card className="text-center">
  <Card.Header><Card.Title>Post</Card.Title></Card.Header>
  <Card.Body>
      <div className="row">
      <input type="text" placeholder="Company" name="company"></input>
      </div>
      <div className="row">
      <input type="url" placeholder="Image link(optional)" name="image_content"></input>
      </div>
      <div className="row">
      <textarea id="post" placeholder="Content" name="text_content"></textarea>
      </div>
  </Card.Body>
  <Button>Submit</Button>
</Card>
</div>
)
}
export default AddPost