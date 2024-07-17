import React, { useState } from 'react';
import "./Login.css"
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const loginUrl = "https://ec2-3-83-254-115.compute-1.amazonaws.com:8020/api/v1/login/";


    const navigate = useNavigate();



    function handleLogin(e) {
        e.preventDefault();
        fetch(loginUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                email: "string",
                password,
                phone_number: "string",
                input_code: "0"
            })
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.message == "Successfully Logged in") {
                    alert("User login successful");
                    navigate("/dashboard");
                }
                else {
                    alert(`${data.message}`)
                }


            })
            .catch((err) => console.log(err));
    }

    return (
        <div className="flex backround-img items-center justify-center min-h-screen bg-gray-100">
            <div className="flex flex-col items-center bg-blue-300 text-white p-10 rounded-lg shadow-lg w-full max-w-md">
                <div className="mb-4">
                    <h1 className="text-3xl text-black font-bold">Login</h1>
                </div>
                <form onSubmit={handleLogin} className="w-full space-y-4">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Username"
                            onChange={(e) => setUsername(e.target.value)}
                            className="pl-10 py-2 w-full rounded-md border border-gray-600 bg-gray-900 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-gray-500"
                        />
                    </div>
                    <div className="relative">
                        <input
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            className="pl-10 py-2 w-full rounded-md border border-gray-600 bg-gray-900 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-gray-500"
                        />
                    </div>
                    <div className='flex justify-center'>
                        <button
                            type="submit"
                            className="w-52 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 focus:outline-none"
                        >
                            Login
                        </button>
                    </div>
                </form>
                <div className="mt-4 text-gray-800">
                    <p>Don't have an account? <a href="#" className="text-gray-800 font-bold hover:underline">Sign up</a></p>
                </div>
            </div>
        </div>
    );
}

export default Login;
