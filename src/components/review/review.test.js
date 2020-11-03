import React from 'react';
import renderer from 'react-test-renderer';
import Review from './review';

const comment = {
  id: 1,
  avatar: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/3.jpg`,
  name: `Isaac`,
  rating: 4,
  commentText: `Bathed in the nature. Completely unplugged. Unforgettable.`,
  isPro: true,
  date: new Date(`Tue Oct 27 2020 12:29:21 GMT+0300`),
};

it(`Review render correctly`, () => {
  const tree = renderer.create(<Review
    comment={comment}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
