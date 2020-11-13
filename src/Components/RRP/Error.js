import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div>
      <h4>Error Page</h4>
      <Link to='/' className='btn'>
        Back Home
      </Link>
    </div>
  );
};

export default Error;
