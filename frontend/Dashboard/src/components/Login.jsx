import React, { useState } from 'react';
import "./Login.css"
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState(true)
    const loginUrl = "https://july-assignment2-4.onrender.com/login";


    const navigate = useNavigate();



    function handleLogin(e) {
        setLogin(false)
        e.preventDefault();
        fetch(loginUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                password,

            })
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.Message == "Login successfull") {

                    setUsername("")
                    setPassword("")
                    alert("User login successful");
                    navigate("/dashboard");
                }
                else {
                    alert(`${data.Message}`)
                }
                setLogin(true); 

            })
            .catch((err) =>{
                console.log(err);
                setLogin(true); 
            })
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
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="pl-10 py-2 w-full rounded-md border border-gray-600 bg-gray-900 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-gray-500"
                        />
                    </div>
                    <div className="relative">
                        <input
                            type="password"
                            value={password}
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            className="pl-10 py-2 w-full rounded-md border border-gray-600 bg-gray-900 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-gray-500"
                        />
                    </div>
                    <div className='flex justify-center'>
                        <button
                            type="submit"
                            className="w-52 py-2 bg-gray-700 flex justify-center text-white rounded-md hover:bg-gray-600 focus:outline-none"
                        >
                            {login ? (
                                "Login"
                            ) : (
                               
                                <div role="status">
                                    <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                    </svg>
                                    <span className="sr-only">Loading...</span>
                                </div>

                            )}
                    
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
