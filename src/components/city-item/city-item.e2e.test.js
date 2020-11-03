import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CityItem from './city-item';

configure({adapter: new Adapter()});

const mockEvent = {
  preventDefault() {}
};

it(`Click on city name should pass to the callback`, () => {
  const onCityLinkClick = jest.fn();

  const screen = shallow(<CityItem
    onCityLinkClick={onCityLinkClick}
    city={`Amsterdam`}
    isActive={true}
  />);

  const linkElement = screen.find(`.locations__item-link`);

  linkElement.simulate(`click`, mockEvent);

  expect(onCityLinkClick).toHaveBeenCalledTimes(1);
});
