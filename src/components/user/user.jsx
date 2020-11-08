import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {AuthorizationStatus} from '../../utils/const';

const User = ({onLinkEmailClick, authorizationStatus, userData}) => {
  return (
    <li className="header__nav-item user">
      <a className="header__nav-link header__nav-link--profile" href="#" onClick={onLinkEmailClick}>
        <div className="header__avatar-wrapper user__avatar-wrapper">
        </div>

        {authorizationStatus === AuthorizationStatus.NO_AUTH
          ? <span className="header__login">Sign in</span>
          : <span className="header__user-name user__name">{userData.email}</span>
        }

      </a>
    </li>
  );
};

User.propTypes = {
  onLinkEmailClick: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  userData: PropTypes.oneOfType([
    PropTypes.object.isRequired,
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatarUrl: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      isPro: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired
    })
  ])
};

const mapStateToProps = (({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
  userData: USER.user
}));

export {User};
export default connect(mapStateToProps)(User);
