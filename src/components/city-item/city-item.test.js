import React from 'react';
import renderer from 'react-test-renderer';
import CityItem from './city-item';

it(`CityItem render correctly`, () => {
  const tree = renderer.create(<CityItem
    onCityLinkClick={() => {}}
    city={`Dusseldorf`}
    isActive={false}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
