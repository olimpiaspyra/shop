import React from 'react';
import {PropTypes} from 'prop-types';
import {Card, Button} from 'react-bootstrap';

import Rating from '../Rating/Rating';
import {CartState} from '../../context/Context';

const SingleProduct = ({prod}) => {
  const {
    state: {cart},
    dispatch,
  } = CartState();

  console.log(cart);

  return (
    <div className='products' style={{width: '30%', margin: 10}}>
      <Card>
        <Card.Img variant='top' src={prod.image} alt={prod.name} />
        <Card.Body>
          <Card.Title style={{fontSize: 20}}>{prod.name}</Card.Title>
          <Card.Subtitle style={{paddingBottom: 10, fontSize: 15}}>
            <span> $ {prod.price.split('.')[0]}</span>
            {/* <span>{prod.price.replace(/\.00$/, '')}</span> */}
            {prod.fastDelivery ? <div>Fast Delivery</div> : <div>4 days delivery</div>}
            <Rating className='py-5' rating={prod.ratings} />
          </Card.Subtitle>
          {cart.some((p) => p.id === prod.id) ? (
            <Button
              onClick={() => {
                dispatch({
                  type: 'REMOVE_FROM_CART',
                  payload: prod,
                });
              }}
              variant='danger'
            >
              Remove from cart
            </Button>
          ) : (
            <Button
              onClick={() => {
                dispatch({
                  type: 'ADD_TO_CART',
                  payload: prod,
                });
              }}
              disabled={!prod.inStock}
            >
              {!prod.inStock ? 'Out of stock' : 'Add to cart'}
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

SingleProduct.propTypes = {
  prod: PropTypes.object,
  name: PropTypes.string,
};

export default SingleProduct;
