import React from 'react';
import { verifyToken, githubClientID } from '../APIHelper';

const TOKEN_STATUS_VERIFYING = 'Verifying token..';
const TOKEN_STATUS_VERIFIED = 'Token verified, you\'re good to go!';
const TOKEN_STATUS_UNVERIFIED = <>You need a valid token, you can acquire one <a href={`https://github.com/login/oauth/authorize?client_id=${githubClientID}`}>here</a>.</>;

/**
 * The verifier part of the register form.
 * @param {Object} props The React props object.
 * @param {'regular' | 'oauth'} props.method The method to be used.
 */
export default function Verifier({ method, onChange }) {

    function verify() {
        verifyToken().then(verified => {
            setTokenStatus(verified ? TOKEN_STATUS_VERIFIED : TOKEN_STATUS_UNVERIFIED);
            onChange(verified);
        });
    }

    const [tokenStatus, setTokenStatus] = React.useState(TOKEN_STATUS_VERIFYING);
    let content;

    switch (method) {
        case 'regular':
            content = (
                <>
                    <input onInput={e => onChange(e.target.value !== '')} className="input" id="password" type="password" placeholder="Password" />
                </>
            );
            break;
        case 'oauth':
            content = (
                <>
                    <label htmlFor="token-status" className="label">Token Status</label>
                    <p id="token-status">{tokenStatus}</p>
                </>
            );
            if(tokenStatus === TOKEN_STATUS_VERIFYING){
                verify();
            }
            break;
        default:
            content = (<p>Error loading register verifier.</p>);
            break;
    }

    return content;
}