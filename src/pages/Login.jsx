import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { users } from '../data/users'; // Import the mock user data
import { sdk } from '../apis/api';

const Login = () => {
    const [email, setEmail] = useState('');
    const [user, setUser] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // await sdk.triggerWorkflowAndRedirect('5a8SGU6FKq', email, user);
        if (window.thriveStackInstance) {
            // Call triggerWorkflowAndRedirect method for signup workflow
            try {
                window.thriveStackInstance.triggerWorkflowAndRedirect({
                    workflowId: 'lxLF5sQhMl',
                    emailId: email, // Replace with the desired emailId
                    userId: user, // Replace with the desired userId
                });
            } catch (error) {
                console.error("Error calling triggerWorkflowAndRedirect:", error);
            }
        } else {
            console.error(
                "ThriveStack instance is not available. Ensure it is initialized in the parent page."
            );
        };
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="flex flex-col bg-white p-8 rounded-lg shadow-md w-full max-w-md gap-3">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign In</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="user" className="block text-sm font-medium text-gray-700 mb-1">User</label>
                        <input
                            id="user"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={user}
                            onChange={(e) => setUser(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
                    >
                        Sign In
                    </button>
                </form>
                <Link to='/signup' className="text-blue-600 hover:underline focus:outline-none text-center">Need an account? Sign Up</Link>
            </div>
        </div>
    );
}

export default Login;