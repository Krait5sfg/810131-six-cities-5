import React from 'react';
import SortingItem from '../sorting-item/sorting-item';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import PropTypes from 'prop-types';
import {SotringType} from '../../utils/const';
import withOpen from '../../hocs/with-open/with-open';

const sortingItemsNames = Object.values(SotringType);

const Sorting = ({sortingType, isOpen, onSortingClick, updateSortingType, sortPopular, sortLowToHigh, sortHighToLow, sortTopRated}) => {

  switch (sortingType) {
    case SotringType.POPULAR:
      sortPopular();
      break;
    case SotringType.LOW_TO_HIGH:
      sortLowToHigh();
      break;
    case SotringType.HIGH_TO_LOW:
      sortHighToLow();
      break;
    case SotringType.TOP_RATED:
      sortTopRated();
  }

  const openClassName = isOpen ? `places__options--opened` : ``;

  const sortingItemsElements = sortingItemsNames.map((itemName, index) =>
    <SortingItem
      itemName={itemName}
      key={index}
      isActive={sortingType === itemName}
      onSortingItemClick={(evt) => {
        updateSortingType(evt.target.dataset.sorting);
        onSortingClick();
      }}
    />);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by{` `}</span>
      <span className="places__sorting-type" tabIndex="0" onClick={onSortingClick}>
        {sortingType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${openClassName}`}>
        {sortingItemsElements}
      </ul>
    </form>
  );
};

Sorting.propTypes = {
  sortingType: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onSortingClick: PropTypes.func.isRequired,
  updateSortingType: PropTypes.func.isRequired,
  sortPopular: PropTypes.func.isRequired,
  sortLowToHigh: PropTypes.func.isRequired,
  sortHighToLow: PropTypes.func.isRequired,
  sortTopRated: PropTypes.func.isRequired,
};

const mapStateToProps = (({sortingType}) => {
  return {
    sortingType,
  };
});

const mapDispatchToProps = ((dispatch) => ({
  updateSortingType(sortingType) {
    dispatch(ActionCreator.updateSortingType(sortingType));
  },
  sortLowToHigh() {
    dispatch(ActionCreator.sortLowToHigh());
  },
  sortPopular() {
    dispatch(ActionCreator.sortPopular());
  },
  sortHighToLow() {
    dispatch(ActionCreator.sortHighToLow());
  },
  sortTopRated() {
    dispatch(ActionCreator.sortTopRated());
  }
}));

export const EnhancedSorting = withOpen(Sorting);
export default connect(mapStateToProps, mapDispatchToProps)(withOpen(Sorting));
