import React from 'react';
import UStateArray from '../Components/USB/UStateArray';
import UStateB from '../Components/USB/UStateB';
import UStateObj from '../Components/USB/UStateObject';
import UStateCounter from '../Components/USB/UStateCounter';

const UseStateBasics = () => {
  return (
    <div>
      <h1>i work too</h1>
      <UStateB />
      <UStateArray />
      <UStateObj />
      <UStateCounter />
    </div>
  );
};

export default UseStateBasics;
