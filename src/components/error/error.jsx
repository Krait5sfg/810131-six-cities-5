import React from 'react';

const Error = () => {
  const style = {
    position: `absolute`,
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
    fontSize: `30px`,
    fontWeight: `bold`,
  };

  return <p style={style}>Sorry. Data is not loaded. Please try again later.</p>;
};

export default Error;
