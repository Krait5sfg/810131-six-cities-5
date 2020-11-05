import React from 'react';
import renderer from 'react-test-renderer';
import {ReviewList} from './review-list';


const comments = [
  {
    avatar: ``,
    date: new Date(`10-08-2020`),
    // id: 1,
    isPro: true,
    // commentText: ``,
    name: ``,
    rating: 0,
  },
  {
    avatar: ``,
    date: new Date(`11-08-2020`),
    // id: 1,
    isPro: true,
    // commentText: ``,
    name: ``,
    rating: 0,
  },
];

jest.mock(`../review/review`, () => `Review`);

it(`ReviewList render correctly`, () => {
  const tree = renderer.create(<ReviewList
    activeOfferComments={comments}
    updateActiveOfferComments={() => {}}
    idActiveOffer={1}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
