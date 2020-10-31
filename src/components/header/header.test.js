import React from 'react';
import renderer from 'react-test-renderer';
import Header from './header';
import {BrowserRouter} from 'react-router-dom';

it(`Header render correctly`, () => {
  const tree = renderer.create(<BrowserRouter><Header><React.Fragment /></Header></BrowserRouter>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
