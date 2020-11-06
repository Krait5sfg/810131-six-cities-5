import React from 'react';
import renderer from 'react-test-renderer';
import FavoriteLocationList from './favorite-location-list';

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
    isFavorite: false,
    previewImage: ``,
  },
  {
    city: ``,
    accommodation: {
      bedroomsCount: 0,
      features: [``],
      guestsLimit: 0,
      isPremium: false,
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
    id: 0,
    images: [],
    isFavorite: true,
    previewImage: ``,
  },
];

jest.mock(`../favorite-place-card/favorite-place-card`, () => `FavoritePlaceCard`);

it(`FavoriteLocationList render correctly`, () => {
  const tree = renderer.create(<FavoriteLocationList
    city={`Paris`}
    cityFavoriteOffers={offers}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
