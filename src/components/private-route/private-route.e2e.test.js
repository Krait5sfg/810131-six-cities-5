import {PrivateRoute} from './private-route';
import React from 'react';
import {configure, mount} from 'enzyme';
import {BrowserRouter, Redirect, Route} from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

it(`should redirect user to login page if no authorization`, () => {

  const wrapper = mount(<BrowserRouter><PrivateRoute
    path={``}
    exact
    authorizationStatus={`NO_AUTH`}
    render={() => {}}
  /></BrowserRouter>);

  const renderProp = wrapper.find(`Route`).prop(`render`);
  expect(wrapper.exists(Route)).toBe(true);
  expect(renderProp()).toEqual(<Redirect to={`/login`} />);
});
