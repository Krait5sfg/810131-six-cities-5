import React from 'react';
import renderer from 'react-test-renderer';
import {OfferPage} from './offer-page';

const noop = () => {};
const offer = {
  city: ``,
  accommodation: {
    bedroomsCount: 0,
    features: [],
    guestsLimit: 2,
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
    name: `0`,
  },
  id: 0,
  images: [],
  isFavorite: false,
  previewImage: ``,
};
const nearbyOffers = [
  {
    city: ``,
    accommodation: {
      bedroomsCount: 2,
      features: [`Laptop friendly workspace`, `Baby seat`, `Air conditioning`],
      guestsLimit: 4,
      isPremium: false,
      price: 300,
      rating: 4.5,
      title: `The Joshua Tree House`,
      type: `hotel`,
    },
    cityLocation: {latitude: 51.225402, longitude: 6.776314, zoom: 13},
    coordinates: [51.247402, 6.777314],
    description: `This is a place for dreamers to reset, reflect, and create. Designed with a 'slow' pace in mind, our hope is that you `,
    host: {
      avatar: `img/avatar-angelina.jpg`,
      isPro: true,
      name: `Angelina`,
    },
    id: 2,
    images: [`https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/1.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`],
    isFavorite: false,
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
  },
  {
    city: ``,
    accommodation: {
      bedroomsCount: 3,
      features: [`Laptop friendly workspace`, `Baby seat`, `Air conditioning`],
      guestsLimit: 3,
      isPremium: false,
      price: 400,
      rating: 3,
      title: `The Joshua Tree House`,
      type: `hotel`,
    },
    cityLocation: {latitude: 51.225402, longitude: 6.776314, zoom: 13},
    coordinates: [51.257402, 6.787314],
    description: `This is a place for dreamers to reset, reflect, and create. Designed with a 'slow' pace in mind, our hope is that you `,
    host: {
      avatar: `img/avatar-angelina.jpg`,
      isPro: true,
      name: `Angelina`,
    },
    id: 3,
    images: [`https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/1.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`],
    isFavorite: false,
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
  },
  {
    city: ``,
    accommodation: {
      bedroomsCount: 3,
      features: [`Laptop friendly workspace`, `Baby seat`, `Air conditioning`],
      guestsLimit: 3,
      isPremium: false,
      price: 100,
      rating: 4.5,
      title: `The Joshua Tree House`,
      type: `hotel`,
    },
    cityLocation: {latitude: 51.225402, longitude: 6.776314, zoom: 13},
    coordinates: [51.267402, 6.797314],
    description: `This is a place for dreamers to reset, reflect, and create. Designed with a 'slow' pace in mind, our hope is that you `,
    host: {
      avatar: `img/avatar-angelina.jpg`,
      isPro: true,
      name: `Angelina`,
    },
    id: 4,
    images: [`https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/1.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`],
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
  it(`User with authorization`, () => {
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
