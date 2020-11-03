import React from 'react';
import renderer from 'react-test-renderer';
import withOpen from './with-open';

const MockComponent = () => {
  return <div />;
};

const MockComponentWrapped = withOpen(MockComponent);

it(`withOpen is render correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
      isOpen={true}
      onSortingClick={() => {}}
    />
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
