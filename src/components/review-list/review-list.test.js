import React from 'react';
import renderer from 'react-test-renderer';
import {ReviewList} from './review-list';


const comments = [
  {
    id: 1,
    avatar: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/3.jpg`,
    name: `Isaac`,
    rating: 4,
    commentText: `Bathed in the nature. Completely unplugged. Unforgettable.`,
    isPro: true,
    date: new Date(`Tue Oct 27 2020 12:29:21 GMT+0300`),
  },
  {
    id: 1,
    avatar: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/3.jpg`,
    name: `Iakov`,
    rating: 3,
    commentText: `Bathed in the nature. Completely unplugged. Unforgettable.`,
    isPro: true,
    date: new Date(`Tue Oct 27 2020 12:30:21 GMT+0300`),
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
