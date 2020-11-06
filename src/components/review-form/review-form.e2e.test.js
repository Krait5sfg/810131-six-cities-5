import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {ReviewForm} from './review-form';

const mockEvent = {
  preventDefault() {}
};

configure({adapter: new Adapter()});

it(`Submit form in ReviewForm`, () => {
  const onSubmit = jest.fn(() => {
    return Promise.resolve(jest.fn());
  });
  const changeDisableFormAttribute = jest.fn();

  const wrapper = shallow(<ReviewForm
    rating={`3`}
    review={`some text`}
    onSubmit={onSubmit}
    onChange={() => {}}
    idActiveOffer={1}
    resetState={() => {}}
    isDisabled={false}
    changeDisableFormAttribute={changeDisableFormAttribute}
  />);

  wrapper.find(`.reviews__form`).simulate(`submit`, mockEvent);

  expect(wrapper.find(`.reviews__textarea`).props().value).toEqual(`some text`);
  expect(wrapper.find(`.form__rating-input`).at(2).props().checked).toEqual(true);
  expect(onSubmit).toHaveBeenCalledTimes(1);
  expect(changeDisableFormAttribute).toHaveBeenCalledTimes(1);
  expect(wrapper.find(`.reviews__textarea`).props().disabled).toEqual(false);
  expect(wrapper.find(`.reviews__submit`).props().disabled).toEqual(true);
});
