import React from 'react';
import {PropTypes} from 'prop-types';

const SingleProduct = ({prod}) => {
  return <div>{prod.name}</div>;
};

SingleProduct.propTypes = {
  prod: PropTypes.object,
  name: PropTypes.string,
};

export default SingleProduct;
