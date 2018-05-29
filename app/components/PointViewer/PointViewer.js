import React from 'react';
import PropTypes from 'prop-types';
import ol from 'openlayers';
import 'openlayers/css/ol.css';

import './style.scss';

export default class PointViewer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.map = {};
  }
  componentDidMount() {
    // OL map
    const placeLayer = new ol.layer.Vector({
    });

    this.map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        }),
        placeLayer
      ],
      view: new ol.View({
        center: [949282, 6002552],
        zoom: 4
      })
    });

    const popupElement = document.getElementById('popup');
    const popup = new ol.Overlay({
      element: popupElement,
      autoPan: true,
      autoPanAnimation: {
        duration: 250
      }
    });
    this.map.addOverlay(popup);
  }

  render() {
    return (
      <div id="map"></div>
    );
  }
}

PointViewer.propTypes = {
};
