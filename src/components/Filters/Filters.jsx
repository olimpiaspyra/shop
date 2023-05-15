import React from 'react';
import {Form, Button} from 'react-bootstrap';

import './Filters.scss';

const Filters = () => {
  return (
    <div className='filters'>
      <span className='title'>Filter Products </span>
      <Form>
        <Form.Check
          style={{padding: 5}}
          inline
          type='radio'
          label='Ascending'
          name='group1'
          id={`inline-1`}
        />
        <Form.Check
          style={{padding: 5}}
          inline
          type='radio'
          label='Descending'
          name='group1'
          id={`inline-2`}
        />
        <Form.Check
          style={{padding: 5}}
          inline
          type='checkbox'
          label='Include Out of Stock'
          name='group1'
          id={`inline-3`}
        />
        <Form.Check
          style={{padding: 5}}
          inline
          type='checkbox'
          label='Fast Delivery Only'
          name='group1'
          id={`inline-4`}
        />
        <label style={{padding: 10}}>Rating</label>
        {/* <Rating rating={byRating} style={{cursor: 'pointer'}} /> */}
        <Button style={{fontSize: 12}} variant='light'>
          Clear Filters
        </Button>
      </Form>
    </div>
  );
};

export default Filters;
