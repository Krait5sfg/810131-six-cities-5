import React from 'react';
import renderer from 'react-test-renderer';
import withOpen from './with-open';
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

