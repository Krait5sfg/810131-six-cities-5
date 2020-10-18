import React from 'react';
import PropTypes from 'prop-types';

const SortingItem = ({itemName, isActive, onSortingItemClick}) => {
  const activeClassName = isActive ? `places__option--active` : ``;
  return (
    <li
      className={`places__option ${activeClassName}`}
      tabIndex="0"
      data-sorting={itemName}
      onClick={onSortingItemClick}
    >
      {itemName}
    </li>
  );
};

SortingItem.propTypes = {
  itemName: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onSortingItemClick: PropTypes.func.isRequired
};

export default SortingItem;
