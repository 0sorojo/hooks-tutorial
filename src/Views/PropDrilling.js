import React, { useState } from 'react';
import List from '../Components/PD/List';
import { data } from '../assets/data';

const PropDrilling = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    setPeople((person) => {
      return people.filter((person) => person.id !== id);
    });
  };

  return (
    <section>
      <h3>prop drilling</h3>
      <List removePerson={removePerson} people={people} />
    </section>
  );
};

export default PropDrilling;
