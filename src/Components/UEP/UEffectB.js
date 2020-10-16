import React, { useState, useEffect } from 'react';

// by default useEffect runs after every re-render

const UEffectB = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    document.title = `New Messages(${value})`;
  });
  console.log('render componenent');
  return (
    <>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        +
      </button>
    </>
  );
};

export default UEffectB;
