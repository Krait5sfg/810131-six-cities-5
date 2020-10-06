import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import offers from './mocks/offers';
import reviews from './mocks/reviews';

ReactDOM.render(<App leaseCount={offers.length} offers={offers} reviews={reviews} />, document.querySelector(`#root`));
