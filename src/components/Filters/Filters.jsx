import React from 'react';
import {Form, Button} from 'react-bootstrap';

import Rating from '../Rating/Rating';
import {CartState} from '../../context/Context';

import './Filters.scss';

const Filters = () => {
  const {
    productState: {sort, byStock, byFastDelivery, byRating, searchQuery},
    productDispatch,
  } = CartState();

  console.log(sort, byStock, byFastDelivery, byRating, searchQuery);

  return (
    <div className='filters'>
      <span className='title'>Filter Products </span>
      <Form>
        <Form.Check
          className='p-2'
          inline
          type='radio'
          label='Ascending'
          name='group1'
          id={`inline-1`}
          onChange={() => {
            productDispatch({
              type: 'SORT_BY_PRICE',
              payload: 'lowToHigh',
            });
          }}
          checked={sort === 'lowToHigh' ? true : false}
        />
        <Form.Check
          className='p-2'
          inline
          type='radio'
          label='Descending'
          name='group1'
          id={`inline-2`}
          onChange={() => {
            productDispatch({
              type: 'SORT_BY_PRICE',
              payload: 'highToLow',
            });
          }}
          checked={sort === 'highToLow' ? true : false}
        />
        <Form.Check
          className='p-2'
          inline
          type='checkbox'
          label='Include Out of Stock'
          name='group1'
          id={`inline-3`}
          onChange={() => {
            productDispatch({
              type: 'FILTER_BY_STOCK',
            });
          }}
          checked={byStock}
        />
        <Form.Check
          className='p-2'
          inline
          type='checkbox'
          label='Fast Delivery Only'
          name='group1'
          id={`inline-4`}
          onChange={() => {
            productDispatch({
              type: 'FILTER_BY_DELIVERY',
            });
          }}
          checked={byFastDelivery}
        />
        <div className='rating'>
          <label className='p-2'>Rating</label>
          <Rating
            rating={byRating}
            onClick={i =>
              productDispatch({
                type: 'FILTER_BY_RATING',
                payload: ++i,
              })
            }
            style={{cursor: 'pointer', padding: 3}}
          />
        </div>
        <Button
          size='lg'
          variant='light'
          onClick={() => {
            productDispatch({
              type: 'CLEAN_FILTER',
            });
          }}
        >
          Clear Filters
        </Button>
      </Form>
    </div>
  );
};

export default Filters;
