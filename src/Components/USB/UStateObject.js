import React, { useState } from 'react';

const UStateObj = () => {
  // const [name, setName] = useState('Peter');
  // const [age, setAge] = useState(24);
  // const [message, setMessage] = useState(
  //   'Man who stand on toilet gets high on pot'
  // );

  // const changeMessage = () => {
  //   setMessage('you miss a 100% of the shots you dont take');
  // };

  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    message: 'random message',
  });

  const changeMessage = () => {
    setPerson({ ...person, message: 'Hello World' });
  };

  return (
    <>
      <h1>{person.name}</h1>
      <h1>{person.age}</h1>
      <h1>{person.message}</h1>
      <button className='btn' onClick={changeMessage}>
        Change
      </button>
    </>
  );
};

export default UStateObj;
