import React from 'react';
import renderer from 'react-test-renderer';
import {ReviewList} from './review-list';


const comments = [
  {
    id: 1,
    avatar: ``,
    name: ``,
    rating: 0,
    commentText: ``,
    isPro: true,
    date: new Date(``),
  },
  {
    id: 2,
    avatar: ``,
    name: ``,
    rating: 0,
    commentText: `.`,
    isPro: true,
    date: new Date(``),
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
