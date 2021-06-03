import React from 'react';
import './NavBar.css';
import {Nav,Form,Button,Navbar,FormControl,Container} from 'react-bootstrap';
import logo from './logo.jpg';
function NavigavtionBar()
{

    return (
      
<Navbar collapseOnSelect expand="lg" className="NavBarMain" variant="dark">
  <Container maxwidth="sm|md|lg" >
    
  <Navbar.Brand href="#home"><img src={logo} alt='logo'/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      
      <Nav.Link href="#home" className='buttons'>Home</Nav.Link>
      <Nav.Link href="#branch"className='buttons'>Branches</Nav.Link>
      <Nav.Link href="#ask-question"className='buttons'>Ask</Nav.Link>

    <Nav.Link href="#profile"className='buttons'>Profile</Nav.Link>
    <Nav.Link href="#logout"className='buttons'>Logout</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
)
}
export default NavigavtionBar