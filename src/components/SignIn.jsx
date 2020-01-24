import React from "react";

//Components
import Verifier from "./Verifier";

//Utility functions
import { signInRegularUser, signInOAuthUser } from "../APIHelper";

//Styling
import "./scss/Cred.scss";

/**
 * Displays a sign in form.
 * @param {Object} props The React props object. 
 * @param {Function} props.onLogin Callback receiving username, verifier and verifier method when login was successful.
 * @returns {JSX.Element} A React component.
 */
export default function SignIn({ onLogin }) {

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
        if (method === 'regular') {
            const password = document.getElementById('password').value;
            if (signInRegularUser(username, password)) {
                onLogin(username, password, 'regular');
            }
        } else {
            const token = localStorage.getItem('token');
            if (signInOAuthUser(username, token)) {
                onLogin(username, token, 'token');
            }
        }
    }

    function onUsernameInput(username) {
        setValidUsername(username.trim() !== '');
    }

    function onVerifierInput(valid) {
        setValidVerifier(valid);
    }

    return (
        <>
            <div className="Credwrap">
                <div>
                    <h2 className="CredHead">Sign in</h2>
                    <input onInput={e => onUsernameInput(e.target.value)} className="input" spellCheck="false" type="text" id="username" placeholder="Username" />
                </div>
                <div>
                    <Verifier method={method} onChange={(valid) => onVerifierInput(valid)} />
                </div>
                <button className="submit1" onClick={onSignin} disabled={!(validUsername && validVerifier)}>Sign in</button>
                <button className="submit2" onClick={changeRegisterMethod}>{method === 'regular' ? 'Login w/ Github' : 'Login normally.'}</button>
            </div>
        </>
    );
}
