import React from 'react';
import { registerRegularUser, registerOAuthUser } from '../APIHelper';
import Verifier from './Verifier';


export default function Register(props) {
    
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

    function onRegister() {
        const username = document.getElementById('username').value;
        if(method === 'regular'){
            const password = document.getElementById('password').value;
            registerRegularUser(username, password);
        } else{
            const token = localStorage.getItem('token');
            registerOAuthUser(username, token);
        }
    }

    function onUsernameInput(username){
        setValidUsername(username.trim() !== '');
    }

    function onVerifierInput(valid){
        setValidVerifier(valid);
    }

    return (
        <>
            <div>
                <label htmlFor="username" className="label">Username</label>
                <input onInput={e => onUsernameInput(e.target.value)} className="input" id="username" type="text" />
            </div>
            <div>
                <Verifier method={method} onChange={(valid) => onVerifierInput(valid)} />
            </div>
            
            <button onClick={() => onRegister()} disabled={!(validUsername && validVerifier)}>Register</button>
            <button onClick={changeRegisterMethod}>{method === 'regular' ? 'Register with GitHub OAuth instead!' : 'Register normally.'}</button>
        </>
    );
}