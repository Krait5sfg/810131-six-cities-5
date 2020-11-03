import React from 'react';
import renderer from 'react-test-renderer';
import {CityList} from './city-list'; // компонент подключен к store поэтому тестируем не подлюченный

it(`CityList render correctly`, () => {
  const tree = renderer.create(<CityList
    cities={[`Amsterdam`, `Brussels`, `Paris`, `Cologne`, `Hamburg`, `Dusseldorf`]}
    activeCity={`Dusseldorf`}
    changeCity={() => {}}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});

