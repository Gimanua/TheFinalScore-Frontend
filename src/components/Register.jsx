import React from 'react';
import { registerRegularUser, registerOAuthUser } from '../APIHelper';
import Verifier from './Verifier';
import './scss/Cred.scss';


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
            <div className="Credwrap">
                <div>
                <h2 className="CredHead">Register</h2>
                <input onInput={e => onUsernameInput(e.target.value)} className="input" spellCheck="false" id="username" type="text" placeholder="Username"/>
            </div>
            <div>
                <Verifier method={method} onChange={(valid) => onVerifierInput(valid)} />
            </div>
            
            <button className="submit1" onClick={() => onRegister()} disabled={!(validUsername && validVerifier)}>Register</button>
            <button className="submit2" onClick={changeRegisterMethod}>{method === 'regular' ? 'Register w/ Github' : 'Register normally.'}</button>
            </div>
        </>
    );
}