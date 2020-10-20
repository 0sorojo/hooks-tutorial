import React, { useState } from 'react';

const MultipleInputsOneHandler = () => {
  const [character, setCharacter] = useState({
    firstName: '',
    email: '',
    charName: '',
    age: '',
    height: '',
    weight: '',
    charClass: '',
    race: '',
    ac: '',
    hitPoints: '',
  });
  const [party, setParty] = useState([]);

  // dynamic object properties

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setCharacter({ ...character, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      character.firstName &&
      character.email &&
      character.charName &&
      character.age &&
      character.height &&
      character.weight &&
      character.charClass &&
      character.race &&
      character.ac &&
      character.hitPoints
    ) {
      const newCharacter = {
        ...character,
        id: new Date().getTime().toString(),
      };
      console.log(newCharacter.id);
      setParty([...party, newCharacter]);
      setCharacter({
        firstName: '',
        email: '',
        charName: '',
        age: '',
        height: '',
        weight: '',
        charClass: '',
        race: '',
        ac: '',
        hitPoints: '',
      });
    }
  };

  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>Player Name: </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={character.firstName}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email: </label>
            <input
              type='text'
              id='email'
              name='email'
              value={character.email}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='charName'>Character Name: </label>
            <input
              type='text'
              id='charName'
              name='charName'
              value={character.charName}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='age'>Age: </label>
            <input
              type='text'
              id='age'
              name='age'
              value={character.age}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='height'>Height: </label>
            <input
              type='text'
              id='height'
              name='height'
              value={character.height}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='weight'>Weight: </label>
            <input
              type='text'
              id='weight'
              name='weight'
              value={character.weight}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='charClass'>Class: </label>
            <input
              type='text'
              id='charClass'
              name='charClass'
              value={character.charClass}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='race'>Race: </label>
            <input
              type='text'
              id='race'
              name='race'
              value={character.race}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='ac'>AC: </label>
            <input
              type='text'
              id='ac'
              name='ac'
              value={character.ac}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='hitPoints'>Hit Points: </label>
            <input
              type='text'
              id='hitPoints'
              name='hitPoints'
              value={character.hitPoints}
              onChange={handleChange}
            />
          </div>
          <button type='submit'>Add Party Member</button>
        </form>
        {party.map((member) => {
          const {
            id,
            firstName,
            email,
            charName,
            age,
            height,
            weight,
            charClass,
            race,
            ac,
            hitPoints,
          } = member;
          return (
            <div className='item' key={id}>
              <h4>{charName}</h4>
              <h3>{charClass}</h3>
              <p>
                AC: {ac} HP: {hitPoints}
              </p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default MultipleInputsOneHandler;
