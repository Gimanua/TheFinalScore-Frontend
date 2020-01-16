import React from 'react';
import { signInRegularUser, signInOAuthUser } from '../APIHelper';
import Verifier from './Verifier';

export default function SignIn(props) {

    const [method, setMethod] = React.useState('regular');
    const [validUsername, setValidUsername] = React.useState(false);
    const [validVerifier, setValidVerifier] = React.useState(false);

    function changeRegisterMethod() {
        if (method === 'regular') {
            setMethod('oauth');
        }
        else {
            setMethod('regular');
        }
    }

    function onSignin() {
        const username = document.getElementById('username').value;
        if(method === 'regular'){
            const password = document.getElementById('password').value;
            signInRegularUser(username, password)
        } else{
            const token = localStorage.getItem('token');
            signInOAuthUser(username, token);
        }
    }

    function onUsernameInput(username){
        setValidUsername(username.trim() !== '');
    }

    function onVerifierInput(valid){
        setValidVerifier(valid);
    }

    //<a href={`https://github.com/login/oauth/authorize?client_id=${githubClientID}`}>
    return (
        <>
            <div>
                <label htmlFor="username" className="label">Username</label>
                <input onInput={e => onUsernameInput(e.target.value)} className="input" type="text" id="username" />
            </div>
            <div>
                <Verifier method={method} onChange={(valid) => onVerifierInput(valid)} />
            </div>
            <button onClick={onSignin} disabled={!(validUsername && validVerifier)}>Log In</button>
            <button onClick={changeRegisterMethod}>{method === 'regular' ? 'Login with GitHub OAuth instead!' : 'Login normally.'}</button>
        </>
    );
}
