import React, {PureComponent} from 'react';
import PlaceCard from '../place-card/place-card';
import PropTypes from 'prop-types';
import {OfferPropTypes} from '../../utils/property-type';
import {TypePage} from '../../utils/const';

export default class PlaceCardList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeCardId: null
    };
    this._handlePlaceCardMouseEnter = this._handlePlaceCardMouseEnter.bind(this);
  }

  render() {
    const {offers, typePage} = this.props;
    const placeCards = offers.map((offer) => {
      return (
        <PlaceCard offer={offer}
          onPlaceCardMouseEnter={this._handlePlaceCardMouseEnter}
          key={offer.id}
          typePage={typePage} />
      );
    });

    let elementClassName = ``;
    if (typePage === TypePage.MAIN) {
      elementClassName = `cities__places-list tabs__content`;
    } else if (this.props.typePage === TypePage.OFFER) {
      elementClassName = `near-places__list`;
    }

    return (
      <div className={`${elementClassName} places__list`}>
        {placeCards}
      </div >
    );
  }

  _handlePlaceCardMouseEnter(offerId) {
    this.setState({activeCardId: offerId});
  }
}

PlaceCardList.propTypes = {
  offers: PropTypes.arrayOf(OfferPropTypes).isRequired,
  typePage: PropTypes.string.isRequired,
};
