import React from 'react';
import PropTypes from 'prop-types';
import ol from 'openlayers';
import 'openlayers/css/ol.css';

import './style.scss';

export default class PointViewer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.map = {};
    this.placeLayer = {};
  }
  componentDidMount() {
    // OL map
    this.placeLayer = new ol.layer.Vector({
      source: new ol.source.Vector({
      })
    });

    this.map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        }),
        this.placeLayer
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
    // this.placeLayer.getSource().clear();
    if(this.props.venues){
      const features = this.props.venues.map((venue) => {
        const feature = new ol.Feature({
          geometry: new ol.geom.Point(ol.proj.fromLonLat([venue.location.lng, venue.location.lat]))
        });
        feature.setStyle(new ol.style.Style({
          image: new ol.style.Icon(({
            anchor: [0, 0],
            anchorXUnits: 'fraction',
            anchorYUnits: 'pixels',
            src: `${venue.categories[0].icon.prefix}64${venue.categories[0].icon.suffix}`
          }))
        }));
        return feature;
      });
      if(this.placeLayer.getSource()){
        this.placeLayer.getSource()
          .addFeatures(features);
      }
    }
    return (
      <div id="map"></div>
    );
  }
}

PointViewer.propTypes = {
};
