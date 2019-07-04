import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = () => (
  <img className="map-marker" alt="marker" src="https://maps.google.com/mapfiles/ms/icons/yellow-dot.png" />
);

const LocationMap = ({ coord }) => {
  const loc = (coord && coord.lat && coord.lon)
    ? [coord.lat, coord.lon] : [-43.248910, -65.2620272];
  return (
    <div style={{ width: '100%', height: '500px' }}>
      <GoogleMapReact
        defaultZoom={7}
        bootstrapURLKeys={{ key: 'AIzaSyC4Vr6At2POMUxsazoPIGm4hhOLdutLoxI' }}
        center={{ lat: loc[0], lng: loc[1] }}
        options={{ styles }}
      >
        <AnyReactComponent
          lat={loc[0]}
          lng={loc[1]}
        />
      </GoogleMapReact>
    </div>
  );
};
LocationMap.propTypes = {
  coord: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lon: PropTypes.number.isRequired,
  }).isRequired,
};

// dark styles
const styles = [
  { elementType: 'geometry', stylers: [{ color: '#8c8c8c' }] },
  { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
  { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#d59563' }],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#d59563' }],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{ color: '#263c3f' }],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#6b9a76' }],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{ color: '#38414e' }],
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#212a37' }],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#9ca5b3' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{ color: '#746855' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#1f2835' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#f3d19c' }],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{ color: '#2f3948' }],
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#d59563' }],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{ color: '#2a334f' }],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#515c6d' }],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [{ color: '#2a334f' }],
  },
];
export default LocationMap;
