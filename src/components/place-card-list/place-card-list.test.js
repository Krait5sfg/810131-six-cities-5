import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCardList from './place-card-list';

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
  },
];

// потому что в компоненте PlaceCardList есть другой компонент PlaceCard
jest.mock(`../place-card/place-card`, () => `PlaceCard'`);

it(`PlaceCardList render correctly on MainPage`, () => {
  const tree = renderer.create(<PlaceCardList
    offers={offers}
    typePage={`main`}
    onFavoriteButtonClick={() => {}}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});

it(`PlaceCardList render correctly on OfferPage`, () => {
  const tree = renderer.create(<PlaceCardList
    offers={offers}
    typePage={`offer`}
    onFavoriteButtonClick={() => {}}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
