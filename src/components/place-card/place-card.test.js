import React from 'react';
import renderer from 'react-test-renderer';
import {PlaceCard} from './place-card';
// нужно оборачивать компонент в BrowserRouter потому что в нем используется Link (иначе ошибку выдает)
import {BrowserRouter} from 'react-router-dom';


const offer = {
  city: ``,
  accommodation: {
    bedroomsCount: 0,
    features: [],
    guestsLimit: 0,
    isPremium: true,
    price: 241,
    rating: 4.4,
    title: `The Joshua Tree House`,
    type: `room`,
  },
  cityLocation: {latitude: 0, longitude: 0, zoom: 0},
  coordinates: [0, 0],
  description: ``,
  host: {
    avatar: ``,
    isPro: true,
    name: ``,
  },
  id: 1,
  images: [],
  isFavorite: false,
  previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
};

it(`PlaceCard render correctly`, () => {
  const tree = renderer.create(<BrowserRouter><PlaceCard updateIdActiveCardForMap={() => {}} offer={offer} typePage={`main`} onFavoriteButtonClick={() => {}} updateFavoriteStatus={() => {}} /> </BrowserRouter>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
