import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {ReviewPropTypes} from '../../utils/property-type';
import Review from '../review/review';
import {connect} from 'react-redux';
import {getActiveOfferComments} from '../../store/api-actions';

const LIMIT_COMMENT = 10;

class ReviewList extends PureComponent {

  componentDidMount() {
    const {updateActiveOfferComments, idActiveOffer} = this.props;
    updateActiveOfferComments(idActiveOffer);
  }

  render() {
    const {activeOfferComments} = this.props;

    // сортировка комментариев чтобы сначала рендерились по свежей дате
    const sortedCommentsByDate = activeOfferComments.slice().sort((first, second) => first.date > second.date ? -1 : 1).slice(0, LIMIT_COMMENT);

    const commentCount = activeOfferComments.length;
    const commentElements = sortedCommentsByDate.map((comment, id) => <Review comment={comment} key={id} />);

    return (
      <React.Fragment>
        <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{commentCount}</span></h2>
        <ul className="reviews__list">
          {commentElements}
        </ul>
      </React.Fragment>
    );
  }
}

ReviewList.propTypes = {
  activeOfferComments: PropTypes.arrayOf(ReviewPropTypes).isRequired,
  updateActiveOfferComments: PropTypes.func.isRequired,
  idActiveOffer: PropTypes.number.isRequired
};

const mapStateToProps = (({DATA}) => ({
  activeOfferComments: DATA.activeOfferComments,
}));

const mapDispatchToProps = ((dispatch) => ({
  updateActiveOfferComments(idActiveOffer) {
    dispatch(getActiveOfferComments(idActiveOffer));
  }
}));

export {ReviewList};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewList);
