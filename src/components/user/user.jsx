import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {AuthorizationStatus} from '../../utils/const';

const User = ({onLinkEmailClick, authorizationStatus}) => {
  return (
    <li className="header__nav-item user">
      <a className="header__nav-link header__nav-link--profile" href="#" onClick={onLinkEmailClick}>
        <div className="header__avatar-wrapper user__avatar-wrapper">
        </div>

        {authorizationStatus === AuthorizationStatus.NO_AUTH
          ? <span className="header__login">Sign in</span>
          : <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
        }

      </a>
    </li>
  );
};

User.propTypes = {
  onLinkEmailClick: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired
};

const mapStateToProps = (({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
}));

export {User};
export default connect(mapStateToProps)(User);
