import React, {PureComponent} from 'react';
import '../../../node_modules/leaflet/dist/leaflet.css';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';
import {OfferPropTypes} from '../../utils/property-type';
import {TypePage} from '../../utils/const';

const ICON_PATH = `img/pin.svg`;
const AMSTERDAM_COORDINATES = [52.38333, 4.9];
const ID_MAP_CONTAINER = `map`;
const ZOOM = 12;
const IconSize = {
  WIDTH: 27,
  HEIGHT: 39
};

export default class Map extends PureComponent {

  componentDidMount() {
    const {offers} = this.props;
    const offerCoordinates = offers.map((offer) => offer.coordinates);

    // настройки leaflet
    const icon = leaflet.icon({
      iconUrl: ICON_PATH,
      iconSize: [IconSize.WIDTH, IconSize.HEIGHT]
    });

    const map = leaflet.map(ID_MAP_CONTAINER, {
      center: AMSTERDAM_COORDINATES,
      zoom: ZOOM,
      zoomControl: false,
      marker: true
    });
    map.setView(AMSTERDAM_COORDINATES, ZOOM);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    // добавляет координаты на карту leaflet
    offerCoordinates.forEach((coordinates) => {
      leaflet
        .marker(coordinates, {icon})
        .addTo(map);
    });
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

}

Map.propTypes = {
  offers: PropTypes.arrayOf(OfferPropTypes).isRequired,
  typePage: PropTypes.string.isRequired
};
