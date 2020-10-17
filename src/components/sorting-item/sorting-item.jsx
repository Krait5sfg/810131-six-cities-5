import React from 'react';

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

export default SortingItem;
