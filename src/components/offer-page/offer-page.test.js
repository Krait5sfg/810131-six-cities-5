import React from 'react';
import renderer from 'react-test-renderer';
import {OfferPage} from './offer-page';

const noop = () => {};
const offer = {
  city: ``,
  accommodation: {
    bedroomsCount: 2,
    features: [`Laptop friendly workspace`, `Baby seat`, `Air conditioning`],
    guestsLimit: 2,
    isPremium: true,
    price: 200,
    rating: 4,
    title: `The Joshua Tree House`,
    type: `room`,
  },
  cityLocation: {latitude: 0, longitude: 0, zoom: 0},
  coordinates: [0, 0],
  description: `Discover daily local life in city center...`,
  host: {
    avatar: `img/avatar-angelina.jpg`,
    isPro: true,
    name: `Angelina`,
  },
  id: 1,
  images: [`https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/1.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`],
  isFavorite: false,
  previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
};

const nearbyOffers = [
  {
    city: ``,
    accommodation: {
      bedroomsCount: 0,
      features: [],
      guestsLimit: 0,
      isPremium: false,
      price: 300,
      rating: 4.5,
      title: `The Joshua Tree House`,
      type: `hotel`,
    },
    cityLocation: {latitude: 0, longitude: 0, zoom: 0},
    coordinates: [],
    description: ``,
    host: {
      avatar: ``,
      isPro: true,
      name: ``,
    },
    id: 2,
    images: [],
    isFavorite: false,
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
  },
  {
    city: ``,
    accommodation: {
      bedroomsCount: 0,
      features: [],
      guestsLimit: 0,
      isPremium: false,
      price: 300,
      rating: 4.5,
      title: `The Joshua Tree House`,
      type: `hotel`,
    },
    cityLocation: {latitude: 0, longitude: 0, zoom: 0},
    coordinates: [],
    description: ``,
    host: {
      avatar: ``,
      isPro: true,
      name: ``,
    },
    id: 3,
    images: [],
    isFavorite: false,
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
  },
  {
    city: ``,
    accommodation: {
      bedroomsCount: 0,
      features: [],
      guestsLimit: 0,
      isPremium: false,
      price: 300,
      rating: 4.5,
      title: `The Joshua Tree House`,
      type: `hotel`,
    },
    cityLocation: {latitude: 0, longitude: 0, zoom: 0},
    coordinates: [],
    description: ``,
    host: {
      avatar: ``,
      isPro: true,
      name: ``,
    },
    id: 4,
    images: [],
    isFavorite: false,
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
  },
];

jest.mock(`../header/header`, () => `Header`);
jest.mock(`../user/user`, () => `User`);
jest.mock(`../loading/loading`, () => `Loading`);
jest.mock(`../place-card-list/place-card-list`, () => `PlaceCardList`);
jest.mock(`../map/map`, () => `Map`);
jest.mock(`../review-form/review-form`, () => `ReviewForm`);
jest.mock(`../review-list/review-list`, () => `ReviewList`);

describe(`OfferPage render correctly`, () => {
  it(`OfferPage with authorization`, () => {
    const tree = renderer
      .create(<OfferPage
        onLinkEmailClick={noop}
        offer={offer}
        nearbyOffers={nearbyOffers}
        authorizationStatus={`AUTH`}
        idActiveOffer={1}
        updateActiveOffer={noop}
        updateNearbyOffers={noop}
        onFavoriteButtonClick={noop}
        updateFavoriteStatus={noop}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`OfferPage without authorization`, () => {
    const tree = renderer
      .create(<OfferPage
        onLinkEmailClick={noop}
        offer={offer}
        nearbyOffers={nearbyOffers}
        authorizationStatus={`NO_AUTH`}
        idActiveOffer={1}
        updateActiveOffer={noop}
        updateNearbyOffers={noop}
        onFavoriteButtonClick={noop}
        updateFavoriteStatus={noop}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
