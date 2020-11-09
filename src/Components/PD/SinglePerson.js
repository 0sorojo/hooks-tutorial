import React from 'react';

const SinglePerson = ({ id, name, removePerson }) => {
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>X</button>
    </div>
  );
};

export default SinglePerson;
