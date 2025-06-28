import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from './UserContext';
import './css/SignUp.css'; // Importing external CSS

export default function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { users, setUsers } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = { firstName, lastName, username, email, password };
    setUsers([...users, newUser]);

    setFirstName('');
    setLastName('');
    setUsername('');
    setEmail('');
    setPassword('');

    alert(`🎉 Account created successfully!\nEmail: ${email}\nPassword: ${password}`);
  };

  return (
    <div className="signup-container">

      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>✨ Create Your Account</h2>

        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          placeholder="Enter your first name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />

        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          placeholder="Enter your last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />

        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          placeholder="Choose a username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Create a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Sign Up</button>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}
