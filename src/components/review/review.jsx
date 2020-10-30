import React from 'react';
import {getRating} from '../../utils/common';
import {ReviewPropTypes} from '../../utils/property-type';

const Review = ({comment}) => {
  const {avatar, name, rating, commentText, date} = comment;

  const editingDate = date.toLocaleString(`en-US`, {year: `numeric`, month: `long`});
  const dateTime = `${date.toISOString().substr(0, 10)}`;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatar} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: getRating(rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {commentText}
        </p>
        <time className="reviews__time" dateTime={dateTime}>{editingDate}</time>
      </div>
    </li>
  );
};

Review.propTypes = {
  comment: ReviewPropTypes,
};

export default Review;
