import React from 'react';
import renderer from 'react-test-renderer';
import {LoginPage} from './login-page';
import {BrowserRouter} from 'react-router-dom';

jest.mock(`../header/header`, () => `Header`);
jest.mock(`../user/user`, () => `User`);

describe(`LoginPage render correctly`, () => {
  it(`LoginPage without authorization`, () => {
    const tree = renderer.create(<BrowserRouter><LoginPage
      city={`Paris`}
      onSubmit={() => {}}
      authorizationStatus={`NO_AUTH`}
      onLinkEmailClick={() => {}}
    /></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`LoginPage with authorization`, () => {
    const tree = renderer.create(<BrowserRouter><LoginPage
      city={`Paris`}
      onSubmit={() => {}}
      authorizationStatus={`AUTH`}
      onLinkEmailClick={() => {}}
    /></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
