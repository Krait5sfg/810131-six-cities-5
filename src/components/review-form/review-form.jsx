import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import withReviewForm from '../../hocs/with-review-form/with-review-form';
import {connect} from 'react-redux';
import {sendComment} from '../../store/api-actions';

const LimitLetter = {
  MIN: 50,
  MAX: 300,
  EMPTY: 0,
};

class ReviewForm extends PureComponent {
  constructor(props) {
    super(props);
    this._handleFormSubmit = this._handleFormSubmit.bind(this);
  }

  _handleFormSubmit(evt) {
    const {onSubmit, rating, review, idActiveOffer, resetState} = this.props;
    evt.preventDefault();

    // отправка комментария
    onSubmit(idActiveOffer, {
      review,
      rating
    });

    resetState(); // обнуляет state при отправке формы
  }

  render() {
    const {rating, review, onChange} = this.props;
    return (
      <form className="reviews__form form" action="#" method="post" onSubmit={this._handleFormSubmit}>
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" onChange={onChange} checked={rating === `5`} />
          <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star" />
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" onChange={onChange} checked={rating === `4`} />
          <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star" />
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" onChange={onChange} checked={rating === `3`} />
          <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star" />
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" onChange={onChange} checked={rating === `2`} />
          <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star" />
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" onChange={onChange} checked={rating === `1`} />
          <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star" />
            </svg>
          </label>
        </div>
        <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" onChange={onChange} value={review}></textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button
            className="reviews__submit form__submit button"
            type="submit"
            disabled={review.length < LimitLetter.MIN || review.length > LimitLetter.MAX || rating.length === LimitLetter.EMPTY} >
            Submit
          </button>
        </div>
      </form>
    );
  }
}

ReviewForm.propTypes = {
  rating: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  idActiveOffer: PropTypes.number.isRequired,
  resetState: PropTypes.func.isRequired
};

const mapDispatchToProps = ((dispatch) => ({
  onSubmit(idActiveOffer, commentData) {
    dispatch(sendComment(idActiveOffer, commentData));
  }
}));

export const EnhancedReviewForm = withReviewForm(ReviewForm);
export default connect(null, mapDispatchToProps)(withReviewForm(ReviewForm));
