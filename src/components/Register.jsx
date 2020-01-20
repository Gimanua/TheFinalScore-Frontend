import React from 'react';
import { registerRegularUser } from '../APIHelper';

export default function Register(props) {

    function onRegister() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        if(!username.trim() || !password){
            alert('Credentials are invalid.');
            return;
        }
        registerRegularUser(username, password)
    }

    return (
        <>
            <div>
                <label htmlFor="username" className="label">Username</label>
                <input className="input" id="username" type="text" />
            </div>
            <div>
                <label htmlFor="password" className="label">Password</label>
                <input className="input" id="password" type="password" />
            </div>
            <button onClick={onRegister}>Register</button>
        </>
    );
}