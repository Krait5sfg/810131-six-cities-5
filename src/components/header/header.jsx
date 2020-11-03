import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {PagePath} from '../../utils/const';

const Header = (props) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to={PagePath.MAIN}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {props.children}
            </ul>
          </nav>
        </div>
      </div >
    </header >
  );
};

Header.propTypes = {
  children: PropTypes.element.isRequired
};

export default Header;
