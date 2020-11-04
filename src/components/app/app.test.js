import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app';
import {BrowserRouter} from 'react-router-dom';


const offers = [
  {
    city: ``,
    accommodation: {
      bedroomsCount: 0,
      features: [],
      guestsLimit: 0,
      isPremium: true,
      price: 241,
      rating: 4.4,
      title: ``,
      type: ``,
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
    previewImage: ``,
  },
  {
    city: ``,
    accommodation: {
      bedroomsCount: 0,
      features: [],
      guestsLimit: 0,
      isPremium: true,
      price: 0,
      rating: 0,
      title: ``,
      type: ``,
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
    previewImage: ``,
  },
];

jest.mock(`../private-route/private-route`, () => `PrivateRoute`);
jest.mock(`../offer-page/offer-page`, () => `OfferPage`);
jest.mock(`../login-page/login-page`, () => `LoginPage`);
jest.mock(`../favorite-page/favorite-page`, () => `FavoritePage`);
jest.mock(`../main-page/main-page`, () => `MainPage`);

it(`App render correctly`, () => {
  const tree = renderer.create(<BrowserRouter><App
    offers={offers}
    city={`Dusseldorf`}
    authorizationStatus={`NO_AUTH`}
  /></BrowserRouter>).toJSON();
  expect(tree).toMatchSnapshot();
});
