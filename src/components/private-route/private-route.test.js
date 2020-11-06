import React from 'react';
import renderer from 'react-test-renderer';
import {PrivateRoute} from './private-route';
import {BrowserRouter} from 'react-router-dom';

describe(`PrivateRoute render correctly`, () => {
  it(`PrivateRoute with authorization`, () => {
    const tree = renderer.create(<BrowserRouter><PrivateRoute path={`/favorites`} exact={true} authorizationStatus={`AUTH`} render={() => {}} /> </BrowserRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`PrivateRoute without authorization`, () => {
    const tree = renderer.create(<BrowserRouter><PrivateRoute path={`/favorites`} exact={true} authorizationStatus={`NO_AUTH`} render={() => {}} /> </BrowserRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
