import React from 'react';
import SinglePerson from './SinglePerson';

const List = ({ people, removePerson }) => {
  return (
    <>
      <div>
        {people.map((person) => {
          return (
            <SinglePerson
              key={person.id}
              removePerson={removePerson}
              {...person}
            />
          );
        })}
      </div>
    </>
  );
};

export default List;
