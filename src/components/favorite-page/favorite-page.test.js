import React from 'react';
import renderer from 'react-test-renderer';
import {FavoritePage} from './favorite-page';
import {BrowserRouter} from 'react-router-dom';

const offers = [
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
    id: 2,
    images: [],
    isFavorite: true,
    previewImage: ``,
  }
];

jest.mock(`../header/header`, () => `Header`);
jest.mock(`../user/user`, () => `User`);
jest.mock(`../favorite-location-list/favorite-location-list`, () => `FavoriteLocationList`);

describe(`FavoritePage render correctly`, () => {
  it(`FavoritePage with favorite offers`, () => {
    const tree = renderer.create(<BrowserRouter><FavoritePage
      favoriteOffers={offers}
      onLinkEmailClick={() => {}}
      updateFavoriteOffers={() => {}}
    /></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`FavoritePage without favorite offers`, () => {
    const tree = renderer.create(<BrowserRouter><FavoritePage
      favoriteOffers={[]}
      onLinkEmailClick={() => {}}
      updateFavoriteOffers={() => {}}
    /></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
