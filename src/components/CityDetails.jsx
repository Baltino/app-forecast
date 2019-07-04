import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
} from 'reactstrap';
import LocationMap from './Map';


function CityDetails(props) {
  const { city: { name, coord, main }, loading } = props;
  if (loading) {
    return <Row> Searching.. </Row>;
  }
  return name ? (
    <Row style={{ marginTop: 20 }}>
      <Col md="4">
        <h2>{name}</h2>
        <p>
          <b> Temperature:</b>
          <span>
            {main.temp}
            K
          </span>
        </p>
        <p>
          <b> Min:</b>
          <span>
            {main.temp_min}
            K
          </span>
          <b> Max:</b>
          <span>
            {main.temp_max}
            K
          </span>
        </p>
        <p>
          <b> Pressure:</b>
          <span>
            {main.pressure}
            HPA
          </span>
        </p>
        <p>
          <b> Humidity:</b>
          <span>
            {main.humidity}
            %
          </span>
        </p>
      </Col>
      <Col md="8">
        <LocationMap coord={coord} />
      </Col>
    </Row>
  ) : (
    <Row> Search for a city you want to go :) </Row>
  );
}

CityDetails.propTypes = {
  loading: PropTypes.bool,
  city: PropTypes.shape({
    name: PropTypes.string,
    coord: PropTypes.shape({
      lat: PropTypes.number,
      long: PropTypes.number,
    }),
    main: PropTypes.shape({
      temp: PropTypes.number.isRequired,
      pressure: PropTypes.number.isRequired,
      humidity: PropTypes.number.isRequired,
      temp_min: PropTypes.number.isRequired,
      temp_max: PropTypes.number.isRequired,
    }),
  }),
};
CityDetails.defaultProps = {
  city: {},
  loading: false,
};

export default CityDetails;
