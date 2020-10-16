import React, { useState } from 'react';

const UStateB = () => {
  const [text, setText] = useState('Push the Button');

  const handleClick = () => {
    if (text === 'Push the Button') {
      setText('Thanks!');
    } else {
      setText('Push the Button');
    }
  };

  return (
    <>
      <h2>{text}</h2>
      <button className='btn' onClick={handleClick}>
        Button
      </button>
    </>
  );
};

export default UStateB;
