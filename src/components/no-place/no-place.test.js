import React from 'react';
import renderer from 'react-test-renderer';
import NoPlace from './no-place';

it(`NoPlace render correctly`, () => {
  const tree = renderer.create(<NoPlace
    city={`Dusseldorf`}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});

