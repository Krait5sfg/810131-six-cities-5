import React, {PureComponent} from 'react';
import SortingItem from '../sorting-item/sorting-item';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import PropTypes from 'prop-types';
import {SotringType} from '../../utils/const';

const sortingItemsNames = Object.values(SotringType);

class Sorting extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this._handleSortingClick = this._handleSortingClick.bind(this);
    this.onSortingItemClick = this.onSortingItemClick.bind(this);
  }

  render() {
    const {sortingType} = this.props;
    const openClassName = this.state.isOpen ? `places__options--opened` : ``;

    const sortingItemsElements = sortingItemsNames.map((itemName, index) =>
      <SortingItem
        itemName={itemName}
        key={index}
        isActive={sortingType === itemName}
        onSortingItemClick={this.onSortingItemClick}
      />);

    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by{` `}</span>
        <span className="places__sorting-type" tabIndex="0" onClick={this._handleSortingClick}>
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
  }

  componentDidUpdate() {
    const {sortingType, sortPopular, sortLowToHigh, sortHighToLow, sortTopRated} = this.props;

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
  }

  onSortingItemClick(evt) {
    this.props.updateSortingType(evt.target.dataset.sorting);
    this.setState((previusState) => ({
      isOpen: !previusState.isOpen,
    }));
  }

  _handleSortingClick() {
    this.setState(({isOpen}) => ({
      isOpen: !isOpen
    }));
  }
}

Sorting.propTypes = {
  sortingType: PropTypes.string.isRequired,
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

export {Sorting};
export default connect(mapStateToProps, mapDispatchToProps)(Sorting);
