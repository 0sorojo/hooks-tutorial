import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

// can not make useEffect async Await - useEffect cannot return a promise
// set*** useState function triggers re-renders can cause an infinite loop if nested in a useEffect statement.

const UEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
    console.log(
      'i only ran once because I have an empty array as the second argument of the useEffect hook'
    );
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h2>github users</h2>
      <ul className='users'>
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UEffectFetchData;
