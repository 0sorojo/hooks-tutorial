import React, { useState, useEffect } from 'react';

// memory leak can be mitigated by removing event listeners
// clean up function is a second function in a useEffect.
// very important with conditional rendering

const UEffectCleanUp = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log('useEffect');
    window.addEventListener('resize', checkSize);
    return () => {
      console.log('cleanup');
      window.removeEventListener('resize', checkSize);
    };
  });

  console.log('render');

  return (
    <>
      <h2>Window</h2>
      <h3>{size} px</h3>
    </>
  );
};

export default UEffectCleanUp;
