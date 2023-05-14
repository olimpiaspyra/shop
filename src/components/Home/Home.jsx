import React from 'react';

import {CartState} from '../../context/Context';
import SingleProduct from '../SingleProduct/SingleProduct';

import './Home.scss';

const Home = () => {
  const {
    state: {products},
  } = CartState();

  console.log(products);
  return (
    <div className='home'>
      Home
      <div className='productContainer'>
        {products.map(prod => {
          return <SingleProduct key={prod.id} prod={prod} />;
        })}
      </div>
    </div>
  );
};

export default Home;
