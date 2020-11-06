import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {FavoritePlaceCard} from './favorite-place-card';

const mockOffer = {
  accommodation: {
    bedroomsCount: 0,
    features: [],
    guestsLimit: 0,
    isPremium: false,
    price: 0,
    rating: 0,
    title: ``,
    type: ``,
  },
  bedrooms: 0,
  city: `Paris`,
  cityLocation: {latitude: 0, longitude: 0, zoom: 0},
  coordinates: [0, 0],
  description: ``,
  goods: [],
  host: {
    avatar: ``,
    id: 0,
    isPro: true,
    name: ``
  },
  id: 11,
  images: [],
  isFavorite: true,
  location: {latitude: 0, longitude: 0, zoom: 0},
  previewImage: ``,
  price: 0,
  rating: 0,
  title: ``,
  type: ``,
};
configure({adapter: new Adapter()});

it(`Click by article in FavoritePlaceCard`, () => {
  const updateIdActiveCardForMap = jest.fn();
  const updateFavoriteStatus = jest.fn();
  const changeCity = jest.fn();

  const wrapper = shallow(<FavoritePlaceCard
    favoriteOffer={mockOffer}
    city={`Amsterdam`}
    changeCity={changeCity}
    updateFavoriteStatus={updateFavoriteStatus}
    updateIdActiveCardForMap={updateIdActiveCardForMap}
  />);

  wrapper.find(`.favorites__card`).simulate(`click`);
  wrapper.find(`.place-card__bookmark-button`).simulate(`click`);

  expect(updateIdActiveCardForMap).toHaveBeenCalledTimes(1);
  expect(updateFavoriteStatus).toHaveBeenCalledTimes(1);
  expect(changeCity).toHaveBeenCalledTimes(1);

});
