import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App.jsx';
import { OAuthCheck } from './APIHelper';

ReactDOM.render(<App />, document.getElementById('root'));

OAuthCheck();