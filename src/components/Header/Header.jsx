import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Container, Form, Dropdown, Nav, Badge, Button} from 'react-bootstrap';
import {FaShoppingCart} from 'react-icons/fa';
import {AiFillDelete} from 'react-icons/ai';

import {CartState} from '../../context/Context';

import './Header.scss';

const Header = () => {
  const {
    state: {cart},
    dispatch,
    productDispatch,
  } = CartState();

  return (
    <Navbar bg='dark' variant='dark' style={{height: 80}}>
      <Container>
        <Navbar.Brand>
          <Link to='/' className='nav-link'>
            Shopping Cart
          </Link>
        </Navbar.Brand>
        <Navbar.Text>
          <Form.Control
            style={{width: 500, fontSize: 15}}
            placeholder='Search a product...'
            onChange={e => {
              productDispatch({
                type: 'FILTER_BY_SEARCH',
                payload: e.target.value,
              });
            }}
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
                {cart.length}
              </Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{minWidth: 300}}>
              {cart.length > 0 ? (
                <>
                  {cart.map(prod => (
                    <span className='cartItem' key={prod.id}>
                      <img src={prod.image} className='cartItemImg' alt={prod.name} />
                      <div className='cartItemDetail'>
                        <span>{prod.name}</span>
                        <span>$ {prod.price.split('.')[0]}</span>
                      </div>
                      <AiFillDelete
                        fontSize='20px'
                        style={{cursor: 'pointer'}}
                        onClick={() =>
                          dispatch({
                            type: 'REMOVE_FROM_CART',
                            payload: prod,
                          })
                        }
                      />
                    </span>
                  ))}
                  <Link to='/cart'>
                    <Button style={{width: '95%', margin: '0 10px'}}>Go To Cart</Button>
                  </Link>
                </>
              ) : (
                <span style={{padding: 10, fontSize: 12}}>Cart is empty!</span>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
