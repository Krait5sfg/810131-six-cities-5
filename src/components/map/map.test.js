import React from 'react';
import renderer from 'react-test-renderer';
import {Map} from './map';

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

describe(`Map render correctly`, () => {
  it(`Map on Main page`, () => {
    const tree = renderer
      .create(<Map
        offers={offers}
        typePage={`main`}
        idActiveCardForMap={10}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Map on Main page without active card`, () => {
    const tree = renderer
      .create(<Map
        offers={offers}
        typePage={`main`}
        idActiveCardForMap={0}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Map on Offer page`, () => {
    const tree = renderer
      .create(<Map
        offers={offers}
        typePage={`offer`}
        idActiveCardForMap={10}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
