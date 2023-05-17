import React, {useState, useEffect} from 'react';
import {ListGroup, Button, Row, Col, Form, Image} from 'react-bootstrap';
import {AiFillDelete} from 'react-icons/ai';

import {CartState} from '../../context/Context';
import Rating from '../Rating/Rating';

const Cart = () => {
  const {
    state: {cart},
    dispatch,
  } = CartState();

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0));
  }, [cart]);

  return (
    <div className='home'>
      <div className='productContainer'>
        <ListGroup>
          {cart.map(prod => (
            <ListGroup.Item key={prod.id}>
              <Row>
                <Col md={2}>
                  <Image src={prod.image} alt={prod.name} fluid rounded />
                </Col>
                <Col md={2}>
                  <span>{prod.name}</span>
                </Col>
                <Col md={2}>$ {prod.price}</Col>
                <Col md={2}>
                  <Rating rating={prod.ratings} />
                </Col>
                <Col>
                  <Form.Control as='select' value={prod.qty}>
                    {[...Array(prod.inStock).keys()].map(x => (
                      <option key={x + 1}>{x + 1}</option>
                    ))}
                  </Form.Control>
                </Col>
                <Col md={2}>
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
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div className='filtersSummary' style={{width: '30%'}}>
        <span style={{fontWeight: 700, fontSize: 20}}>Total: $ {total}</span>
        <Button type='button' disabled={cart.length === 0}>
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
};

export default Cart;
