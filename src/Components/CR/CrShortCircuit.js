import React, { useState } from 'react';

// if else statements can not work inside the return

const CrShortCircuit = () => {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);

  const firstValue = text || 'hello world';

  // if truthy first value is returned of falsey the second value is returned

  const secondValue = text && 'the world is blue and round';

  // if the value is true the opptisite of the && is returned if it falsey nothing is returned

  return (
    <>
      <h2>{firstValue}</h2>
      <h2>{secondValue}</h2>
      <div>
        <h3>{text || 'john doe'}</h3>
        {text && <h3>the sky reflects the ocean</h3>}
        {!text && <h3>the ocean reflects the sky</h3>}
      </div>
      <div>
        <button className='btn' onClick={() => setIsError(!isError)}>
          Toggle Error
        </button>
        {isError ? <h2>Error...</h2> : <h2>Errof..?</h2>}
      </div>
    </>
  );
};

export default CrShortCircuit;
