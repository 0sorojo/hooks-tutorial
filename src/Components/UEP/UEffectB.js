import React, { useState, useEffect } from 'react';

// by default useEffect runs after every re-render without second parameter
// second argument is an array of dependancies
// if I only want the useEffect to run on the first render enter an empy array in the second argument

const UEffectB = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (value >= 1) {
      document.title = `New Messages(${value})`;
    }
  }, [value]);

  useEffect(() => {
    console.log('you had me at first render');
  }, []);

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
