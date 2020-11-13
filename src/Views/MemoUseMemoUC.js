import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useFetch } from '../utils/useFetch';

const url = 'https://course-api.netlify.app/api/javascript-store-products';

// every time props or state changes, component re-renders

const calculateMostExpensive = (data) => {
  console.log('I calculated');
  return (
    data.reduce((total, item) => {
      const price = item.fields.price;
      if (price >= total) {
        total = price;
      }
      return total;
    }, 0) / 100
  );
};

const MemoUseMemoUC = () => {
  const { products } = useFetch(url);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);

  // memoizes the function does the value of the function change.

  const addToCart = useCallback(() => {
    setCart(cart + 1);
  }, [cart]);

  // memoizes the data froma complex function calculations

  const mostExpensive = useMemo(() => calculateMostExpensive(products), [
    products,
  ]);

  return (
    <>
      <h1>Count : {count}</h1>
      <button className='btn' onClick={() => setCount(count + 1)}>
        Click Me
      </button>
      <h1 style={{ marginTop: '3rem' }}>cart : {cart}</h1>
      <h1>Most Expensive : ${mostExpensive}</h1>
      <BigList products={products} addToCart={addToCart} />
    </>
  );
};

// React.memo is memoizing  the props the Big List and if there is no change it will not rerender the thing wrapped by it.

const BigList = React.memo(({ products, addToCart }) => {
  useEffect(() => {
    console.log('big list called');
  });
  return (
    <section className='products'>
      {products.map((product) => {
        return (
          <SingleProduct
            key={product.id}
            {...product}
            addToCart={addToCart}
          ></SingleProduct>
        );
      })}
    </section>
  );
});

const SingleProduct = ({ fields, addToCart }) => {
  useEffect(() => {
    console.log('single Item Called');
  });
  let { name, price } = fields;
  price = price / 100;
  const image = fields.image[0].url;

  return (
    <article className='product'>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
      <button onClick={addToCart}>Add To Cart</button>
    </article>
  );
};

export default MemoUseMemoUC;
