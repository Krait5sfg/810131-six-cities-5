import React, {PureComponent} from 'react';
import '../../../node_modules/leaflet/dist/leaflet.css';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';
import {OfferPropTypes} from '../../utils/property-type';
import {TypePage} from '../../utils/const';
import {connect} from 'react-redux';
import {selectCityOffers} from '../../selector/selector';

const ID_MAP_CONTAINER = `map`;
const LIMIT_NEARBY_OFFER = 3;

const IconPath = {
  SIMPLE_ICON: `img/pin.svg`,
  ACTIVE_ICON: `img/pin-active.svg`
};

const IconSize = {
  WIDTH: 27,
  HEIGHT: 39
};

class Map extends PureComponent {

  componentDidMount() {
    this._setMap();
  }

  componentDidUpdate() {
    this._resetMap();
    this._setMap();
  }

  render() {
    const {typePage} = this.props;
    let elementClassName = ``;
    if (typePage === TypePage.MAIN) {
      elementClassName = `cities__map`;
    } else if (typePage === TypePage.OFFER) {
      elementClassName = `property__map`;
    }

    return <section id="map" className={`${elementClassName} map`}></section>;
  }

  _setMap() {
    const {offers, idActiveCardForMap} = this.props;
    const [firstOffer] = offers;

    const cityCoordinate = [firstOffer.cityLocation.latitude, firstOffer.cityLocation.longitude];
    const zoom = firstOffer.cityLocation.zoom;

    const notActiveOfferCoordinates = offers
      .filter((offer) => offer.id !== idActiveCardForMap)
      .map((offer) => offer.coordinates);
    const activeOfferCoordinates = offers
      .filter((offer) => offer.id === idActiveCardForMap)
      .map((offer) => offer.coordinates);

    // настройки leaflet
    const simpleIcon = leaflet.icon({
      iconUrl: IconPath.SIMPLE_ICON,
      iconSize: [IconSize.WIDTH, IconSize.HEIGHT]
    });

    const activeIcon = leaflet.icon({
      iconUrl: IconPath.ACTIVE_ICON,
      iconSize: [IconSize.WIDTH, IconSize.HEIGHT]
    });

    this._map = leaflet.map(ID_MAP_CONTAINER, {
      center: cityCoordinate,
      zoom,
      zoomControl: false,
      marker: true
    });

    this._map.setView(cityCoordinate, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this._map);

    // добавляет маркеры на карту leaflet
    notActiveOfferCoordinates.forEach((coordinates) => {
      leaflet
        .marker(coordinates, {icon: simpleIcon})
        .addTo(this._map);
    });

    if (activeOfferCoordinates.length) {
      leaflet.marker(activeOfferCoordinates[0], {icon: activeIcon}).addTo(this._map);
    }

  }

  _resetMap() {
    this._map.remove();
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(OfferPropTypes).isRequired,
  typePage: PropTypes.string.isRequired,
  idActiveCardForMap: PropTypes.number.isRequired
};

// связывает store c пропсами компонента
const mapStateToProps = (({PROCESS, DATA}, currentProperty) => ({
  idActiveCardForMap: PROCESS.idActiveCardForMap,
  offers: currentProperty.typePage === TypePage.MAIN ? selectCityOffers({DATA, PROCESS}) : [...DATA.nearbyOffers.slice(0, LIMIT_NEARBY_OFFER), DATA.activeOffer],
}));

export {Map};
export default connect(mapStateToProps)(Map);
