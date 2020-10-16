import React, {PureComponent} from 'react';
import '../../../node_modules/leaflet/dist/leaflet.css';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';
import {OfferPropTypes} from '../../utils/property-type';
import {TypePage} from '../../utils/const';

const ICON_PATH = `img/pin.svg`;
const ID_MAP_CONTAINER = `map`;
const ZOOM = 12;

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

export default class Map extends PureComponent {

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
    const {offers, city} = this.props;
    const offerCoordinates = offers.map((offer) => offer.coordinates);

    // настройки leaflet
    const icon = leaflet.icon({
      iconUrl: ICON_PATH,
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

    // добавляет координаты на карту leaflet
    offerCoordinates.forEach((coordinates) => {
      leaflet
        .marker(coordinates, {icon})
        .addTo(this._map);
    });
  }

  _resetMap() {
    this._map.remove();
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(OfferPropTypes).isRequired,
  typePage: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired
};
