import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const LEASE_COUNT = 312;

ReactDOM.render(<App leaseCount={LEASE_COUNT} />, document.querySelector(`#root`));

