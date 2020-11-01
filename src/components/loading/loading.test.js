import React from 'react';
import renderer from 'react-test-renderer';
import Loading from './loading';

it(`Loading render correctly`, () => {
  const tree = renderer.create(<Loading
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
