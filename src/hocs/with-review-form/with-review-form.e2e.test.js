import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withReviewForm from './with-review-form';

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withReviewForm(MockComponent);

// it.skip(`Should`, () => {
//   const wrapper = shallow(<MockComponentWrapped />);

//   expect(wrapper.state().rating).toEqual(``);
//   expect(wrapper.state().review).toEqual(``);
//   expect(wrapper.state().isDisabled).toEqual(false);
// });

describe(`withReviewForm HOC test`, () => {
  const wrapper = shallow(<MockComponentWrapped />);
  const instance = wrapper.instance();

  it(`test original HOC state`, () => {

    expect(wrapper.state().rating).toEqual(``);
    expect(wrapper.state().review).toEqual(``);
    expect(wrapper.state().isDisabled).toEqual(false);
  });

  it(`test when invoke _changeDisableFormAttribute`, () => {
    instance._changeDisableFormAttribute(true);

    expect(wrapper.state().isDisabled).toEqual(true);
  });

  it(`test when invoke _onInputChange`, () => {
    const enteredRating = {
      target: {
        name: `rating`,
        value: `1`
      }
    };
    const enteredReview = {
      target: {
        name: `review`,
        value: `some text`
      }
    };

    instance._onInputChange(enteredRating);
    instance._onInputChange(enteredReview);

    expect(wrapper.state().rating).toEqual(`1`);
    expect(wrapper.state().review).toEqual(`some text`);
  });

  it(`test when invoke _resetState`, () => {
    instance._resetState();

    expect(wrapper.state().rating).toEqual(``);
    expect(wrapper.state().review).toEqual(``);
  });

});
