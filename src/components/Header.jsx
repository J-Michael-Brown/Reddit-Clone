import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <h1>Another Reddit Clone</h1>
      <Link to="/">Home</Link> | <Link to="/new_post">Make a Post</Link>
    </div>
  );
}

export default Header;
