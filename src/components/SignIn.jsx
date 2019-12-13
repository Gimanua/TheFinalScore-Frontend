import React from 'react';

export default function SignIn(props) {
    return (
        <form>
            <label htmlFor="username" className="label">Username</label>
            <div className="control has-icons-left">
                <input className="input" type="text" placeholder="Username" id="username" />
                <span className="icon is-small is-left">
                    <i className="fas fa-user"></i>
                </span>
            </div>
            <label htmlFor="password" className="label">Password</label>
            <input className="input" type="password" id="password" />
            <button>Log In</button>
        </form>
    );
}