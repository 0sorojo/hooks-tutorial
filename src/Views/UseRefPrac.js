import React, { useEffect, useRef } from 'react';

// target dom element to set uncontrolled inputs
// DOES NOT trigger re-render
// preserves value inbetween values
// refContainer is an OBJECT w/ prop of "current"

const UseRefPrac = () => {
  const refContainer = useRef(null);
  const divContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
    console.log(divContainer.current);
  };

  useEffect(() => {
    console.log(refContainer.current);
    refContainer.current.focus();
  });

  return (
    <>
      <h1>I work</h1>
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <input type='text' ref={refContainer} />
          <button type='submit'>sumbit</button>
        </div>
      </form>
      <div ref={divContainer}>Hello World</div>
    </>
  );
};

export default UseRefPrac;
