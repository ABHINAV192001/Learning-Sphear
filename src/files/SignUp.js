import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from './UserContext';

export default function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { users, setUsers } = useContext(UserContext);

  const handleSubmit = () => {
    const newUser = { firstName, lastName, username, email, password };
    setUsers([...users, newUser]);

    setFirstName('');
    setLastName('');
    setUsername('');
    setEmail('');
    setPassword('');

    console.log('User added:', newUser);
  };

  return (
    <div className="container text-center py-5" id="Login">
      <br /><br /><br />
      <div id='container'>
        <label htmlFor="firstName">First Name :- </label><br />
        <input type="text" id='firstName' placeholder='Enter The First Name' value={firstName}
          onChange={(e) => setFirstName(e.target.value)} /><br /><br />

        <label htmlFor="lastName">Last Name :- </label><br />
        <input type="text" id='lastName' placeholder='Enter The Last Name' value={lastName}
          onChange={(e) => setLastName(e.target.value)} /><br /><br />

        <label htmlFor="username">Enter the Username :- </label><br />
        <input type="text" id='username' placeholder='Enter The Username' value={username}
          onChange={(e) => setUsername(e.target.value)} /><br /><br />

        <label htmlFor="email">Email :- </label><br />
        <input type="email" id='email' placeholder='Enter The Email' value={email}
          onChange={(e) => setEmail(e.target.value)} /><br /><br />

        <label htmlFor="password">Enter the Password :- </label><br />
        <input type="password" id='password' placeholder='Enter The Password' value={password}
          onChange={(e) => setPassword(e.target.value)} /><br /><br />

        <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
        <br /><br />
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}
