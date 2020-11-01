import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import withReviewForm from '../../hocs/with-review-form/with-review-form';
import {connect} from 'react-redux';
import {sendComment} from '../../store/api-actions';

const RATINGS = [`5`, `4`, `3`, `2`, `1`];
const ERROR_MESSAGE = `Something went wrong. The comment was not sent. Click on this message to hide it.`;

const DisableStatus = {
  DISABLED: true,
  NOT_DISABLED: false
};
const LimitLetter = {
  MIN: 50,
  MAX: 299,
  EMPTY: 0,
};

class ReviewForm extends PureComponent {
  constructor(props) {
    super(props);
    this._handleFormSubmit = this._handleFormSubmit.bind(this);
    this.errorRef = React.createRef();
  }

  _handleErrorClick(evt) {
    evt.target.textContent = ``;
  }

  _handleFormSubmit(evt) {
    const {onSubmit, rating, review, idActiveOffer, resetState, changeDisableFormAttribute} = this.props;
    evt.preventDefault();

    changeDisableFormAttribute(DisableStatus.DISABLED); // блокируем форму при отправке комментария
    // отправка комментария
    onSubmit(idActiveOffer, {
      review,
      rating
    }).then(() => {
      changeDisableFormAttribute(DisableStatus.NOT_DISABLED);
      resetState(); // отчистка полей формы
    }).catch(() => {
      changeDisableFormAttribute(DisableStatus.NOT_DISABLED);
      this.errorRef.current.textContent = ERROR_MESSAGE;
    });

  }

  render() {
    const {rating, review, onChange, isDisabled} = this.props;

    const inputElements = RATINGS.map((countRating, index) => {
      return (
        <React.Fragment key={index}>
          <input className="form__rating-input visually-hidden" name="rating" value={countRating} id={`${countRating}-stars`} type="radio" onChange={onChange} checked={rating === countRating} disabled={isDisabled} />
          <label htmlFor={`${countRating}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star" />
            </svg>
          </label>
        </React.Fragment>
      );
    });

    return (
      <form className="reviews__form form" action="#" method="post"
        onSubmit={this._handleFormSubmit}
        ref={this.formRef}>
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          {inputElements}
        </div>
        <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" onChange={onChange} value={review} disabled={isDisabled}></textarea>
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
        <p className="error" style={{color: `red`}}
          ref={this.errorRef}
          onClick={this._handleErrorClick}></p>
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
  resetState: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  changeDisableFormAttribute: PropTypes.func.isRequired
};

const mapDispatchToProps = ((dispatch) => ({
  onSubmit(idActiveOffer, commentData) {
    return dispatch(sendComment(idActiveOffer, commentData));
  }
}));

export {ReviewForm}; // для тестов
export const EnhancedReviewForm = withReviewForm(ReviewForm);
export default connect(null, mapDispatchToProps)(withReviewForm(ReviewForm));
