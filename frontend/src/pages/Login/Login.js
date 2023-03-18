import React from 'react';
import {useState} from "react";
import axios from "axios";
import './Login.css';


function Login() {
    const [username, setUsername] = useState(''); 
    const [password, setPassword] = useState('');     // Create the submit method.
    const submit = async e => {
        e.preventDefault(); const user = {
            username: username,
            password: password
        };          // Create the POST requuest
        const { data } = await axios.post('http://localhost:8000/api/auth/token/',
            user, {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
        // Initialize the access & refresh token in localstorage.      
        localStorage.clear();
        localStorage.setItem('access_token', data.access);
        localStorage.setItem('refresh_token', data.refresh);
        axios.defaults.headers.common['Authorization'] =
            `Bearer ${data['access']}`; window.location.href = '/'
    }

    return (
        <div className="Login">
            <div className='login-main'>
                <div className='login-container'>
                    <div>

                    </div>
                    <hr />
                    <div>
                        <div className='login-form'>
                            <label>Username</label>
                            <input type='text' name='username' id='username' onChange={e => setUsername(e.target.value)}></input>
                            <label>Password</label>
                            <input type='password' name='password' id='password' onChange={e => setPassword(e.target.value)}></input>
                            <span onClick={submit}>Login</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;