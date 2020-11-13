import React from 'react';
import Product from '../Components/PTP/Product';
import { useFetch } from '../utils/useFetch';

const url = 'https://course-api.netlify.app/api/react-prop-types-example';

const PropTypePractice = () => {
  const { products } = useFetch(url);

  return (
    <div>
      <h1>Products</h1>
      <section className='products'>
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </section>
    </div>
  );
};

export default PropTypePractice;
