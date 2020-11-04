import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withOpen from './with-open';

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withOpen(MockComponent);

it.skip(`Should`, () => {
  const wrapper = shallow(<MockComponentWrapped />);

  expect(wrapper.state().isOpen).toEqual(false);
});
