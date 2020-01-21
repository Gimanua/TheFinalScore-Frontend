import React from 'react';
import { signInRegularUser, signInOAuthUser } from '../APIHelper';
import Verifier from './Verifier';
import './scss/Cred.scss';


export default function SignIn({onLogin}) {

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
            if(signInRegularUser(username, password)){
                onLogin(username, password, 'regular');
            }
        } else{
            const token = localStorage.getItem('token');
            if(signInOAuthUser(username, token)){
                onLogin(username, token, 'token');
            }
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
        <div className="Credwrap">
            <div>
                <h2 className="CredHead">Sign in</h2>
                <input onInput={e => onUsernameInput(e.target.value)} className="input" type="text" id="username" placeholder="Username"/>
            </div>
            <div>
                <Verifier method={method} onChange={(valid) => onVerifierInput(valid)} />
            </div>
            <button class="submit1" onClick={onSignin} disabled={!(validUsername && validVerifier)}>Sign in</button>
            <button class="submit2"onClick={changeRegisterMethod}>{method === 'regular' ? 'Login w/ Github' : 'Login normally.'}</button>
            </div>
        </>
    );
}
