import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withOpen from './with-open';

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withOpen(MockComponent);

describe(`Test withOpen HOC`, () => {
  const wrapper = shallow(<MockComponentWrapped />);

  it(`test original state`, () => {
    expect(wrapper.state().isOpen).toEqual(false);
  });

  it(`test when invoke _onSortingClick`, () => {
    const instance = wrapper.instance();
    instance._onSortingClick();

    expect(wrapper.state().isOpen).toEqual(true);
  });

});
