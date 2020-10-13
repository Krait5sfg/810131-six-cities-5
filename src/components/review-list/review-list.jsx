import React from 'react';
import PropTypes from 'prop-types';
import {ReviewPropTypes} from '../../utils/property-type';
import Review from '../review/review';

const ReviewList = ({offerPageReviews}) => {
  const reviewCount = offerPageReviews.length;
  const reviewElements = offerPageReviews.map((review, index) => <Review review={review} key={index} />);

  return (
    <React.Fragment>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewCount}</span></h2>
      <ul className="reviews__list">
        {reviewElements}
      </ul>
    </React.Fragment>
  );
};

ReviewList.propTypes = {
  offerPageReviews: PropTypes.arrayOf(ReviewPropTypes).isRequired,
};

export default ReviewList;
