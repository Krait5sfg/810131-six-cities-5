import PropTypes from 'prop-types';

export const OfferPropTypes = PropTypes.shape({
  city: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  images: PropTypes.array.isRequired,
  accommodation: PropTypes.shape({
    isPremium: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    bedroomsCount: PropTypes.number.isRequired,
    guestsLimit: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    features: PropTypes.array.isRequired,
  }).isRequired,
  cityLocation: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired,
  }).isRequired,
  host: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isPro: PropTypes.bool.isRequired
  }).isRequired,
  description: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  coordinates: PropTypes.array.isRequired,
  previewImage: PropTypes.string.isRequired,
}).isRequired;


export const ReviewPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  commentText: PropTypes.string.isRequired,
  isPro: PropTypes.bool.isRequired,
  date: PropTypes.object.isRequired,
}).isRequired;


