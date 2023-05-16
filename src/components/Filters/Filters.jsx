import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';

import Rating from '../Rating/Rating';

import './Filters.scss';

const Filters = () => {
  const [rate, setRate] = useState(0);

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
        />
        <Form.Check
          className='p-2'
          inline
          type='radio'
          label='Descending'
          name='group1'
          id={`inline-2`}
        />
        <Form.Check
          className='p-2'
          inline
          type='checkbox'
          label='Include Out of Stock'
          name='group1'
          id={`inline-3`}
        />
        <Form.Check
          className='p-2'
          inline
          type='checkbox'
          label='Fast Delivery Only'
          name='group1'
          id={`inline-4`}
        />
        <div className='rating'>
          <label className='p-2'>Rating</label>
          <Rating
            rating={rate}
            onClick={i => setRate(++i)}
            style={{cursor: 'pointer', padding: 3}}
          />
        </div>
        <Button size='lg' variant='light'>
          Clear Filters
        </Button>
      </Form>
    </div>
  );
};

export default Filters;
