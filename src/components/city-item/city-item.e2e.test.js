import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CityItem from './city-item';

configure({adapter: new Adapter()});

it(`Click on city name should implement onCityLinkClick function`, () => {
  const onCityLinkClick = jest.fn();
  const screen = shallow(<CityItem
    onCityLinkClick={onCityLinkClick}
    city={`Amsterdam`}
    isActive={true}
  />);

  const linkElement = screen.find(`.locations__item-link`);

  linkElement.simulate(`click`);

  expect(onCityLinkClick).toHaveBeenCalledTimes(1);
});
