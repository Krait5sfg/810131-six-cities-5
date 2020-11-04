import React from 'react';
import renderer from 'react-test-renderer';
import {FavoritePlaceCard} from './favorite-place-card';
import {BrowserRouter} from 'react-router-dom';

const offer = {
  city: ``,
  accommodation: {
    bedroomsCount: 1,
    features: [`Dishwasher`, `Towels`, `Washer`, `Fridge`, `Breakfast`, `Laptop friendly workspace`, `Baby seat`, `Air conditioning`],
    guestsLimit: 2,
    isPremium: true,
    price: 241,
    rating: 4.4,
    title: `The Joshua Tree House`,
    type: `room`,
  },
  cityLocation: {latitude: 51.225402, longitude: 6.776314, zoom: 13},
  coordinates: [51.237402, 6.797314],
  description: `This is a place for dreamers to reset, reflect, and create. Designed with a 'slow' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.`,
  host: {
    avatar: `img/avatar-angelina.jpg`,
    isPro: true,
    name: `Angelina`,
  },
  id: 1,
  images: [`https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/1.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`],
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
