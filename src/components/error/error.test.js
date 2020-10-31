import React from 'react';
import renderer from 'react-test-renderer';
import Error from './error';

it(`Error render correctly`, () => {
  const tree = renderer.create(<Error />).toJSON();
  expect(tree).toMatchSnapshot();
});
