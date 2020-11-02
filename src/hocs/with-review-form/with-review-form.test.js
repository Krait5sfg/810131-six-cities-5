import React from 'react';
import renderer from 'react-test-renderer';
import withReviewForm from './with-review-form';

const MockComponent = () => {
  return <div />;
};

const MockComponentWrapped = withReviewForm(MockComponent);

it(`withReviewForm is render correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
      rating={``}
      review={``}
      resetState={() => {}}
      onChange={() => {}}
      isDisabled={false}
      changeDisableFormAttribute={() => {}}
    />
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
