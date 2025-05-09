import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from './UserContext';

export default function Login() {
    const { users } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = () => {
        const userFound = users.find(user => user.email === email && user.password === password);

        if (userFound) {
            setMessage(`Welcome, ${userFound.username || userFound.firstName}!`);
            
        } else {
            setMessage('Invalid credentials. Please try again.');
        }
    };

    return (
        <div className="container text-center" id="Login">
            <br /><br /><br /><br /><br /><br />
            <label htmlFor="email">Email :- </label><br />
            <input
                type="email"
                id='email'
                placeholder='Enter The Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            /><br /><br />

            <label htmlFor="password">Enter the Password :- </label><br />
            <input
                type="password"
                id='password'
                placeholder='Enter The Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            /><br /><br />

            <Link to='/SignUp'>Create Account</Link> <br />
            <button onClick={handleSubmit}>Login</button>

            {message && (
                <div style={{ marginTop: '20px', color: message.includes('Invalid') ? 'red' : 'green' }}>
                    {message}
                </div>
            )}
        </div>
    );
}
