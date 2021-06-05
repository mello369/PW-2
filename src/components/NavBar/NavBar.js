import React from 'react';
import './NavBar.css';
import {Nav,Button,Navbar,Container} from 'react-bootstrap';
import logo from './logo.jpg';

import {Link} from 'react-router-dom';
function NavigavtionBar()
{

    return (
      
<Navbar collapseOnSelect expand="lg" className="NavBarMain" variant="dark">
  <Container maxwidth="sm|md|lg" >
    
  <Navbar.Brand href="#home"><img src={logo} alt='logo'/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      
      <Nav.Link href="/" className='buttons'>Home</Nav.Link>
      <Nav.Link href="/branches"className='buttons'>Branches</Nav.Link>
      <Nav.Link href="/ask"className='buttons'>Ask</Nav.Link>
     {/* <Nav.Link href="/addpost"className='buttons'>Add Post</Nav.Link>*/}
    <Nav.Link href="/profile"className='buttons'>Profile</Nav.Link>
    <Nav.Link href="/login"className='buttons'>Logout</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
)
}
export default NavigavtionBar