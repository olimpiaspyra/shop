import React from 'react';
import {Navbar, Container, Form, Dropdown, Nav, Badge} from 'react-bootstrap';
import {FaShoppingCart} from 'react-icons/fa';

import './Header.scss';

const Header = () => {
  return (
    <Navbar bg='dark' variant='dark' style={{height: 80}}>
      <Container>
        <Navbar.Brand>
          <a href='/' className='nav-link'>
            Shopping Cart
          </a>
        </Navbar.Brand>
        <Navbar.Text>
          <Form.Control
            style={{width: 500, fontSize: 15}}
            placeholder='Search a product...'
          />
        </Navbar.Text>
        <Nav>
          <Dropdown align={{sm: 'right'}}>
            <Dropdown.Toggle variant='success'>
              <FaShoppingCart fontSize='20px' />
              <Badge
                style={{fontSize: 13, padding: 8}}
                align={{sm: 'center'}}
                bg={{color: 'inherit'}}
              >
                {12}
              </Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{minWidth: 200}}>
              <span style={{padding: 10}}>Cart is empty!</span>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
