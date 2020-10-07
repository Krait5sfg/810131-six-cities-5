import React, {PureComponent} from 'react';
import PlaceCard from '../place-card/place-card';
import PropTypes from 'prop-types';

export default class PlacesList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeCardId: null
    };
    this.handlePlaceCardMouseEnter = this.handlePlaceCardMouseEnter.bind(this);
  }

  render() {
    const {offers} = this.props;
    const placeCards = offers.map((offer) => {
      return (
        <PlaceCard offer={offer}
          handlePlaceCardMouseEnter={this.handlePlaceCardMouseEnter}
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

  handlePlaceCardMouseEnter(offerId) {
    this.setState(() => {
      return {
        activeCardId: offerId,
      };
    });
  }
}

PlacesList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    city: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    images: PropTypes.array.isRequired,
    accommodation: PropTypes.shape({
      isPremium: PropTypes.bool.isRequired,
      rating: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      bedroomsCount: PropTypes.string.isRequired,
      guestsLimit: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      features: PropTypes.array.isRequired,
    }).isRequired,
    host: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    description: PropTypes.string.isRequired,
    isFavorites: PropTypes.bool.isRequired,
  })).isRequired,
};
