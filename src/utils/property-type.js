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
  isFavorite: PropTypes.bool.isRequired,
}).isRequired;


export const ReviewPropTypes = PropTypes.shape({
  offerId: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  starsCount: PropTypes.number.isRequired,
  commentText: PropTypes.string.isRequired,
  date: PropTypes.object.isRequired,
}).isRequired;


