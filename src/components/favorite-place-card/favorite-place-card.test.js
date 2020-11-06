import React from 'react';
import renderer from 'react-test-renderer';
import {FavoritePlaceCard} from './favorite-place-card';
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
  isFavorite: true,
  previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
};

it(`FavoritePlaceCard render correctly`, () => {
  const tree = renderer.create(<BrowserRouter><FavoritePlaceCard
    favoriteOffer={offer}
    city={`Paris`}
    changeCity={() => {}}
    updateFavoriteStatus={() => {}}
    updateIdActiveCardForMap={() => {}}
  /></BrowserRouter>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
