import React from 'react';
import renderer from 'react-test-renderer';
import {PrivateRoute} from './private-route';
import {BrowserRouter} from 'react-router-dom';

describe(`PlaceCard render correctly`, () => {
  it(`PlaceCard with authorization`, () => {
    const tree = renderer.create(<BrowserRouter><PrivateRoute path={`/favorites`} exact={true} authorizationStatus={`AUTH`} onFavoriteButtonClick={() => {}} render={() => {}} /> </BrowserRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`PlaceCard without authorization`, () => {
    const tree = renderer.create(<BrowserRouter><PrivateRoute path={`/favorites`} exact={true} authorizationStatus={`NO_AUTH`} onFavoriteButtonClick={() => {}} render={() => {}} /> </BrowserRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
