import React from 'react';
import renderer from 'react-test-renderer';
import CityItem from './city-item';

it(`CityItem render correctly with active feature`, () => {
  const tree = renderer.create(<CityItem
    onCityLinkClick={() => {}}
    city={`Dusseldorf`}
    isActive={false}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});

it(`CityItem render correctly without active feature`, () => {
  const tree = renderer.create(<CityItem
    onCityLinkClick={() => {}}
    city={`Dusseldorf`}
    isActive={true}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
