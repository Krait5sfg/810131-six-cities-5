import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {User} from './user';

configure({adapter: new Adapter()});

it(`Click by user's email`, () => {
  const onLinkEmailClick = jest.fn();

  const wrapper = shallow(<User
    onLinkEmailClick={onLinkEmailClick}
    authorizationStatus={`AUTH`}
    userData={{fake: true}}
  />
  );

  wrapper.find(`.header__nav-link`).simulate(`click`);
  expect(onLinkEmailClick).toHaveBeenCalledTimes(1);
});
