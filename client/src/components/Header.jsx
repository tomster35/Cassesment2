import React    from 'react';
import ViewCart from './ViewCart';
import {Nav, Navbar, NavDropdown, Form} from 'react-bootstrap';
import StripeCheckout from 'react-stripe-checkout';

class Header extends React.Component {

  render() {
    return (
      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Apple iPhone </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="index.js">Home</Nav.Link>
          <Nav.Link href="#link"> Link  </Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Pre-Sale</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Discounts</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Acessories</NavDropdown.Item>
          </NavDropdown>
        </Nav>
  
        <Form inline>
        <centre>  <ViewCart cart={this.props.cart} /></centre> 
        
        </Form>
        <StripeCheckout
        stripeKey="pk_test_FIN9AXH48VszOEtWj5fP0iYv00qrXnvrLe"
        token={this.onToken}
      />
     
      </Navbar.Collapse>
      <div>
    </div>
    </Navbar>
    
    
   
  );
}
}

export default  Header;  