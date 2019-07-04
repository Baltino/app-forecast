import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
} from 'reactstrap';


function CityDetails(props) {
  const { cities, clickedCity, removedCity } = props;
  return (
    <Row>
      <Col md="12">
        <h2>Last Visited</h2>
      </Col>
      <ul>
        {cities.map(c => (
          <li key={c.id}>
            <span onClick={() => clickedCity(c)}>{c.name}</span>
            <span onClick={() => removedCity(c)}> x </span>
          </li>
        ))}
      </ul>
    </Row>
  );
}

CityDetails.propTypes = {
  cities: PropTypes.array.isRequired,
  clickedCity: PropTypes.func.isRequired,
  removedCity: PropTypes.func.isRequired,
};

export default CityDetails;
