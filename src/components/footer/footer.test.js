import React from 'react';
import renderer from 'react-test-renderer';
import Footer from './footer';
import {BrowserRouter} from 'react-router-dom';

it(`Footer render correctly`, () => {
  const tree = renderer.create(<BrowserRouter><Footer /></BrowserRouter>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
