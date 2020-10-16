import React, { useState } from 'react';

const UStateCounter = () => {
  const [value, setValue] = useState(0);

  const complexIncrease = () => {
    setTimeout(() => {
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };

  return (
    <>
      <section style={{ margin: '4rem 0' }}>
        <h4>Regular Counter</h4>
        <h1>{value}</h1>
        <div>
          <button className='btn' onClick={() => setValue(value - 1)}>
            decrease
          </button>
          <button className='btn' onClick={() => setValue(0)}>
            set zero
          </button>
          <button className='btn' onClick={() => setValue(value + 1)}>
            increase
          </button>
        </div>
      </section>
      <section style={{ margin: '4rem 0' }}>
        <h4>Complex Counter</h4>
        <h1>{value}</h1>
        <div>
          <button className='btn' onClick={complexIncrease}>
            Increase Later
          </button>
        </div>
      </section>
    </>
  );
};

export default UStateCounter;
