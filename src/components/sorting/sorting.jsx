import React, {PureComponent} from 'react';
import SortingItem from '../sorting-item/sorting-item';
import connect from 'react-redux';

const sortingItemsNames = [`Popular`, `Price: low to high`, `Price: high to low`, `Top rated first`];

class Sorting extends PureComponent {
  constructor() {
    super();

    this.state = {
      isOpen: false,
      activeItem: `Popular`
    };
    this._handleSortingClick = this._handleSortingClick.bind(this);
    this.onSortingItemClick = this.onSortingItemClick.bind(this);
  }

  render() {
    const openClassName = this.state.isOpen ? `places__options--opened` : ``;
    const sortingItemsElements = sortingItemsNames.map((itemName, index) =>
      <SortingItem
        itemName={itemName}
        key={index}
        isActive={this.state.activeItem === itemName}
        onSortingItemClick={this.onSortingItemClick}
      />);

    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by{` `}</span>
        <span className="places__sorting-type" tabIndex="0" onClick={this._handleSortingClick}>
          {this.state.activeItem}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select" />
          </svg>
        </span>
        <ul className={`places__options places__options--custom ${openClassName}`}>
          {sortingItemsElements}
        </ul>
      </form>
    );
  }

  onSortingItemClick(evt) {
    const sortingItemValue = evt.target.dataset.sorting;
    this.setState((previusState) => ({
      isOpen: !previusState.isOpen,
      activeItem: sortingItemValue
    }));
  }

  _handleSortingClick() {
    this.setState((previusState) => ({
      isOpen: !previusState.isOpen
    }));
  }
}


export default Sorting;
