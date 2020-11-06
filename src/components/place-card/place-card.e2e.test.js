import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {PlaceCard} from './place-card';

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

it(`Click by favorite button and mouse enter and leave in PlaceCard`, () => {
  const onFavoriteButtonClick = jest.fn();
  const updateFavoriteStatus = jest.fn();
  const updateIdActiveCardForMap = jest.fn();

  const wrapper = shallow(<PlaceCard
    updateIdActiveCardForMap={updateIdActiveCardForMap}
    offer={mockOffer}
    typePage={`main`}
    onFavoriteButtonClick={onFavoriteButtonClick}
    updateFavoriteStatus={updateFavoriteStatus}
  />
  );

  wrapper.find(`.place-card__bookmark-button`).simulate(`click`);
  wrapper.find(`article`).simulate(`mouseenter`);
  wrapper.find(`article`).simulate(`mouseleave`);

  expect(onFavoriteButtonClick).toHaveBeenCalledTimes(1);
  expect(updateFavoriteStatus).toHaveBeenCalledTimes(1);
  expect(updateIdActiveCardForMap).toHaveBeenCalledTimes(2);
});
