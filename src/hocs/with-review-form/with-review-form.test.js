import React from 'react';
import renderer from 'react-test-renderer';
import withReviewForm from './with-review-form';
import PropTypes from 'prop-types';

const MockComponent = (props) => {
  const {children} = props;
  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = {
  children: PropTypes.node.isRequired,
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
