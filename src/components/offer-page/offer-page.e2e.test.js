import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {OfferPage} from './offer-page';

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

it(`Click by button favorite on OfferPage`, () => {
  const onFavoriteButtonClick = jest.fn();
  const updateFavoriteStatus = jest.fn();

  const wrapper = shallow(<OfferPage
    onLinkEmailClick={() => {}}
    offer={mockOffer}
    nearbyOffers={[{mockOffer}, {mockOffer}]}
    authorizationStatus={`NO_AUTH`}
    idActiveOffer={1}
    updateActiveOffer={() => {}}
    updateNearbyOffers={() => {}}
    onFavoriteButtonClick={() => {}}
    updateFavoriteStatus={() => {}}
  />);

  wrapper.find(`.property__bookmark-button`).simulate(`click`);
  // wrapper.find(`.place-card__bookmark-button`).simulate(`click`);

  expect(onFavoriteButtonClick).toHaveBeenCalledTimes(1);
  expect(updateFavoriteStatus).toHaveBeenCalledTimes(1);
});
