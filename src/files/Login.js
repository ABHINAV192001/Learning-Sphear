import React, { useContext, useState, version } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from './UserContext';

export default function Login() {
    const { users } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        const userFound = users.find(
            (user) => user.email === email && user.password === password
        );
        varifaction();
        function sendMail() {

        }
        
        function varifaction() {
            if (userFound) {
                const b = Math.floor(100000 + Math.random() * 900000);;
                sendMail();
                const a = prompt(`Enter the OTP here:- `);
                if (a == b) {
                    setMessage(`Welcome, ${userFound.username || userFound.firstName}!`);
                    
                } else {
                    setMessage('❌ Invalid credentials. Please try again.');
                }
            } else {
                setMessage('❌ Invalid credentials. Please try again.');
            }
        }


    };


    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center p-4">
            <br /><br /><br /><br /><br />
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">🔐 Login to Your Account</h2><br />
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    /><br /><br />
                    <button
                        type="submit"
                        className="btn btn-outline-primary"
                    >
                        Login
                    </button>
                    <div className="text-sm mt-2">
                        Don’t have an account?{' '}
                        <Link to="/SignUp" className="text-blue-600 hover:underline">
                            Create one
                        </Link>
                    </div>
                </form>

                {message && (
                    <div
                        className={`mt-4 p-2 rounded-lg ${message.includes('Invalid') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
                            }`}
                    >
                        {message}
                    </div>
                )}
            </div>
        </div>
    );
}
