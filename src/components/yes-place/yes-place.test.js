import React from 'react';
import renderer from 'react-test-renderer';
import YesPlace from './yes-place';

it(`YesPlace render correctly`, () => {
  const tree = renderer.create(<YesPlace
    offerCount={10}
    city={`Amsterdam`}
  />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

