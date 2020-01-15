import React from 'react';
import { signInRegularUser } from '../APIHelper';

export default function SignIn(props) {

    function onSignin() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        if (!username.trim() || !password) {
            alert('You didn\'t fill in your username or password correctly.');
            return;
        }
        signInRegularUser(username, password);
    }
    //<a href={`https://github.com/login/oauth/authorize?client_id=${githubClientID}`}>
    return (
        <>
            <div>
                <label htmlFor="username" className="label">Username</label>
                <input className="input" type="text" id="username" />
            </div>
            <div>
                <label htmlFor="password" className="label">Password</label>
                <input className="input" type="password" id="password" />
            </div>
            <button onClick={onSignin}>Log In</button>
        </>
    );
}
