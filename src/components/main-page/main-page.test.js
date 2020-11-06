import React from 'react';
import renderer from 'react-test-renderer';
import {MainPage} from './main-page';

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
    isFavorite: false,
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
    id: 3,
    images: [],
    isFavorite: true,
    previewImage: ``,
  },
];

jest.mock(`../header/header`, () => `Header`);
jest.mock(`../user/user`, () => `User`);
jest.mock(`../city-list/city-list`, () => `CityList`);
jest.mock(`../sorting/sorting`, () => `Sorting`);
jest.mock(`../place-card-list/place-card-list`, () => `PlaceCardList`);
jest.mock(`../map/map`, () => `Map`);

describe(`MainPage render correctly`, () => {
  it(`MainPage without offers`, () => {
    const tree = renderer
      .create(<MainPage
        city={`Amsterdam`}
        onLinkEmailClick={() => {}}
        offers={[]}
        onFavoriteButtonClick={() => {}}
        updateIdActiveCardForMap={() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`MainPage with offers`, () => {
    const tree = renderer
      .create(<MainPage
        city={`Amsterdam`}
        onLinkEmailClick={() => {}}
        offers={offers}
        onFavoriteButtonClick={() => {}}
        updateIdActiveCardForMap={() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
