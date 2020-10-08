import React, {PureComponent} from 'react';
import PlaceCard from '../place-card/place-card';
import PropTypes from 'prop-types';
import {OfferPropTypes} from '../../utils/property-type';

export default class PlaceCardList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeCardId: null
    };
    this._handlePlaceCardMouseEnter = this._handlePlaceCardMouseEnter.bind(this);
  }

  render() {
    const {offers} = this.props;
    const placeCards = offers.map((offer) => {
      return (
        <PlaceCard offer={offer}
          onPlaceCardMouseEnter={this._handlePlaceCardMouseEnter}
          key={offer.id}
          onLinkCardClick={this.props.onLinkCardClick} />
      );
    });

    return (
      <div className="cities__places-list places__list tabs__content">
        {placeCards}
      </div>
    );
  }

  _handlePlaceCardMouseEnter(offerId) {
    this.setState({activeCardId: offerId});
  }
}

PlaceCardList.propTypes = {
  onLinkCardClick: PropTypes.func.isRequired,
  offers: PropTypes.arrayOf(OfferPropTypes).isRequired,
};
