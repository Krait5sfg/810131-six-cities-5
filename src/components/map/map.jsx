import React, {Component} from 'react';
import '../../../node_modules/leaflet/dist/leaflet.css';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';
import {OfferPropTypes} from '../../utils/property-type';
import {TypePage} from '../../utils/const';
import {connect} from 'react-redux';

const ID_MAP_CONTAINER = `map`;
const ZOOM = 12;

const IconPath = {
  SIMPLE_ICON: `img/pin.svg`,
  ACTIVE_ICON: `img/pin-active.svg`
};
const IconSize = {
  WIDTH: 27,
  HEIGHT: 39
};
const CityCoordinate = {
  AMSTERDAM: {coordinates: [52.38333, 4.9]},
  BRUSSELS: {coordinates: [50.85045, 4.34878]},
  PARIS: {coordinates: [48.85341, 2.3488]},
  COLOGNE: {coordinates: [50.93333, 6.95]},
  HAMBURG: {coordinates: [53.57532, 10.01534]},
  DUSSELDORF: {coordinates: [51.22172, 6.77616]},
};

class Map extends Component {

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

  shouldComponentUpdate({city, idActiveCardForMap}) {
    if (city === this.props.city && idActiveCardForMap === this.props.idActiveCardForMap) {
      return false;
    }
    return true;
  }

  _setMap() {
    const {offers, city, idActiveCardForMap} = this.props;

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
      center: CityCoordinate[city.toUpperCase()].coordinates,
      zoom: ZOOM,
      zoomControl: false,
      marker: true
    });

    this._map.setView(CityCoordinate[city.toUpperCase()].coordinates, ZOOM);

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
  city: PropTypes.string.isRequired,
  idActiveCardForMap: PropTypes.number.isRequired
};

// связывает store c пропсами компонента
const mapStateToProps = (({idActiveCardForMap}) => ({
  idActiveCardForMap
}));

export {Map};
export default connect(mapStateToProps)(Map);
