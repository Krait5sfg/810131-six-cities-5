import React, {PureComponent} from 'react';
import '../../../node_modules/leaflet/dist/leaflet.css';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';
import {OfferPropTypes} from '../../utils/property-type';

const ICON_PATH = `img/pin.svg`;

export default class MainPageMap extends PureComponent {


  componentDidMount() {
    const offerCoordinates = this.props.offers.map((offer) => offer.coordinates);

    const amsterdamCoordinates = [52.38333, 4.9];

    const icon = leaflet.icon({
      iconUrl: ICON_PATH,
      iconSize: [27, 39]
    });

    const zoom = 12;
    const map = leaflet.map(`map`, {
      center: amsterdamCoordinates,
      zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(amsterdamCoordinates, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);


    offerCoordinates.forEach((coordinates) => {
      leaflet
        .marker(coordinates, {icon})
        .addTo(map);
    });
  }

  render() {
    return <section id="map" className="cities__map map"></section>;
  }
}

MainPageMap.propTypes = {
  offers: PropTypes.arrayOf(OfferPropTypes).isRequired,
};
