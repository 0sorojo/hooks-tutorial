import React, { useState } from 'react';
import { data } from '../assets/data';

const UStateArray = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h2>{name}</h2>
            <h4>{id}</h4>
            <button onClick={() => removeItem(id)}>X</button>
          </div>
        );
      })}
      <button className='btn' onClick={() => setPeople([])}>
        Erase
      </button>
    </>
  );
};

export default UStateArray;
