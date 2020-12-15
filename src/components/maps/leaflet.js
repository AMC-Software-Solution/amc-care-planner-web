import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import PropTypes from 'prop-types';
import 'leaflet/dist/leaflet.css';
// eslint-disable-next-line import/no-unresolved
import 'leaflet/dist/leaflet.css?url=false';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import 'react-leaflet-markercluster/dist/styles.min.css';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import L from 'leaflet';
import { GmapWraper } from './map-style';

// eslint-disable-next-line no-underscore-dangle
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const LeafletMapBasic = props => {
  const { latitude, longitude, width, height, zoom } = props;

  const position = [latitude, longitude];
  return (
    <GmapWraper width={width} height={height}>
      <Map center={position} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup.
            <br />
            Easily customizable.
          </Popup>
        </Marker>
      </Map>
    </GmapWraper>
  );
};
LeafletMapBasic.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  width: PropTypes.string,
  height: PropTypes.string,
  zoom: PropTypes.number,
};

const LeafletMapMultipleIcon = props => {
  const { latitude, longitude, width, height, zoom, data } = props;

  const position = [latitude, longitude];
  return (
    <GmapWraper width={width} height={height}>
      <Map center={position} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {data.map(item => {
          return (
            <Marker key={item.id} position={item.position}>
              <Popup>
                A pretty CSS3 popup.
                <br />
                Easily customizable.
              </Popup>
            </Marker>
          );
        })}
      </Map>
    </GmapWraper>
  );
};

LeafletMapMultipleIcon.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  width: PropTypes.string,
  height: PropTypes.string,
  zoom: PropTypes.number,
  data: PropTypes.arrayOf(PropTypes.object),
};

const LeafletMapCustomIcon = props => {
  const { latitude, longitude, width, height, zoom, faIcon } = props;
  const fontAwesomeIcon = L.divIcon({
    html: `<i style="color: #2880CA" class="${faIcon}"></i>`,
    iconSize: [20, 20],
    className: 'myDivIcon',
  });
  const position = [latitude, longitude];
  return (
    <GmapWraper width={width} height={height}>
      <Map center={position} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={fontAwesomeIcon}>
          <Popup>
            A pretty CSS3 popup.
            <br />
            Easily customizable.
          </Popup>
        </Marker>
      </Map>
    </GmapWraper>
  );
};
LeafletMapCustomIcon.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  width: PropTypes.string,
  height: PropTypes.string,
  zoom: PropTypes.number,
  faIcon: PropTypes.string,
};

const LeafletMarkerCluster = props => {
  const { latitude, longitude, width, height, zoom, data } = props;

  const position = [latitude, longitude];
  return (
    <GmapWraper width={width} height={height}>
      <Map center={position} zoom={zoom} className="markercluster-map" maxZoom={18}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <MarkerClusterGroup>
          {data.map(item => {
            return (
              <Marker key={item.id} position={item.position}>
                <Popup>
                  A pretty CSS3 popup.
                  <br />
                  Easily customizable.
                </Popup>
              </Marker>
            );
          })}
        </MarkerClusterGroup>
      </Map>
    </GmapWraper>
  );
};

LeafletMarkerCluster.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  width: PropTypes.string,
  height: PropTypes.string,
  zoom: PropTypes.number,
  data: PropTypes.arrayOf(PropTypes.object),
};

export { LeafletMapBasic, LeafletMapMultipleIcon, LeafletMapCustomIcon, LeafletMarkerCluster };
