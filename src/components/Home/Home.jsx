import React from 'react';

import {CartState} from '../../context/Context';
import SingleProduct from '../SingleProduct/SingleProduct';
import Filters from '../Filters/Filters';

import './Home.scss';

const Home = () => {
  const {
    state: {products},
  } = CartState();

  console.log(products);
  return (
    <div className='home'>
      <Filters />
      <div className='productContainer'>
        {products.map(prod => (
          <SingleProduct key={prod.id} prod={prod} />
        ))}
      </div>
    </div>
  );
};

export default Home;
