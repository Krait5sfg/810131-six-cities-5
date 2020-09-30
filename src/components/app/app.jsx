import React from 'react';
import MainPage from '../main-page/main-page';
import PropTypes from 'prop-types';

const App = ({leaseCount}) => <MainPage leaseCount={leaseCount} />;

App.propTypes = {
  leaseCount: PropTypes.number.isRequired
};

export default App;
