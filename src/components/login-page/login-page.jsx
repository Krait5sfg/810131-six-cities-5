import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {login} from '../../store/api-actions';
import {Redirect} from 'react-router-dom';
import {AuthorizationStatus, PagePath} from '../../utils/const';
import User from '../user/user';
import Header from '../header/header';

const EMAIL_REGEXP = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class LoginPage extends PureComponent {

  constructor(props) {
    super(props);
    this.loginRef = createRef();
    this.passwordRef = createRef();

    this._handleFormSubmit = this._handleFormSubmit.bind(this);
  }

  render() {
    const {city, authorizationStatus, onLinkEmailClick} = this.props;

    if (authorizationStatus === AuthorizationStatus.AUTH) {
      return <Redirect to={PagePath.MAIN} />;
    }

    return (
      <div className="page page--gray page--login">
        <Header>
          <User onLinkEmailClick={onLinkEmailClick} />
        </Header>

        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <form className="login__form form" action="#" method="post" onSubmit={this._handleFormSubmit}>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">E-mail</label>
                  <input className="login__input form__input" type="email" name="email" placeholder="Email" required ref={this.loginRef} />
                </div>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">Password</label>
                  <input className="login__input form__input" type="password" name="password" placeholder="Password" required ref={this.passwordRef} />
                </div>
                <button className="login__submit form__submit button" type="submit">Sign in</button>
              </form>
            </section>
            <section className="locations locations--login locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>{city}</span>
                </a>
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  }

  _handleFormSubmit(evt) {
    const {onSubmit} = this.props;
    evt.preventDefault();

    if (EMAIL_REGEXP.test(this.loginRef.current.value)) {
      onSubmit({
        login: this.loginRef.current.value,
        password: this.passwordRef.current.value,
      });
    }
  }
}

LoginPage.propTypes = {
  city: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  onLinkEmailClick: PropTypes.func.isRequired
};

const mapStateToProps = (({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
}));

const mapDispatchToProps = ((dispatch) => ({
  onSubmit(authorizationData) {
    dispatch(login(authorizationData));
  }
}));

export {LoginPage};
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
