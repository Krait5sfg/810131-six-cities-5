import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withReviewForm from './with-review-form';

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withReviewForm(MockComponent);

it.skip(`Should`, () => {
  const wrapper = shallow(<MockComponentWrapped />);

  expect(wrapper.state().rating).toEqual(``);
  expect(wrapper.state().review).toEqual(``);
  expect(wrapper.state().isDisabled).toEqual(false);
});
