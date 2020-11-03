import React from 'react';
import SortingItem from '../sorting-item/sorting-item';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import PropTypes from 'prop-types';
import {SotringType} from '../../utils/const';
import withOpen from '../../hocs/with-open/with-open';

const sortingItemsNames = Object.values(SotringType);

const Sorting = ({sortingType, isOpen, onSortingClick, updateSortingType}) => {

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
};

const mapStateToProps = (({PROCESS}) => {
  return {
    sortingType: PROCESS.sortingType
  };
});

const mapDispatchToProps = ((dispatch) => ({
  updateSortingType(sortingType) {
    dispatch(ActionCreator.updateSortingType(sortingType));
  },
}));

export {Sorting}; // для тестов
export const EnhancedSorting = withOpen(Sorting);
export default connect(mapStateToProps, mapDispatchToProps)(withOpen(Sorting));
