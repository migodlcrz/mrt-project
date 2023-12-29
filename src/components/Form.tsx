import React from 'react'
import { useNavigate } from 'react-router-dom'

function Forms() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/admin/dashboard');
    }

    const backgroundImageUrl = process.env.PUBLIC_URL + 'card-bg.webp';
    
    return (
        <div className="min-h-screen flex items-center justify-center" style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: '200%', backgroundPosition: 'center' }}>
            <div className="max-w-lg mx-auto bg-blue-500 shadow-md rounded-md p-8">
                <form className="max-w-md mx-auto">
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                            Your email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-8 py-3"
                            placeholder="name@email.com"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                            Your password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-8 py-3"
                            required
                        />
                    </div>
                    <div className="flex items-start mb-6">
                        <div className="flex items-center h-5">
                            <input
                                id="remember"
                                type="checkbox"
                                value=""
                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                            />
                        </div>
                        <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900">
                            Remember me
                        </label>
                    </div>
                    <button
                        onClick={handleClick}
                        type="submit"
                        className="text-white bg-gray-700 hover:bg-gray-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-3 text-center"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Forms;