import React from 'react';
import PropTypes from 'prop-types';
// reactstrap components
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Button,
} from 'reactstrap';
import { connect } from 'react-redux';
import { AJAX_STATUS } from '../actions/constants';
// core components
import CityDetails from '../components/CityDetails.jsx';
import Cities from '../components/Cities.jsx';
import { getCity, resetCity, removeCity, getUserCities } from '../actions/cities';


class Home extends React.Component {

  state = {
    cityName: '',
  };

  getCity(e) {
    if (e) {
      e.preventDefault();
    }
    const { cityName } = this.state;
    const { getCity } = this.props;
    getCity(cityName);
  }

  componentDidMount() {
    const { getUserCities } = this.props;
    getUserCities();
  }

  clearCity() {
    const { resetCity } = this.props;
    this.setState({ cityName: '' });
    resetCity();
  }

  clickedCity(city) {
    const { getCity } = this.props;
    getCity(city.name);
  }

  removeCity(city) {
    const { removeCity } = this.props;
    removeCity(city);
  }

  render() {
    const { currentCity, getCityStatus, userCities } = this.props;
    const { cityName } = this.state;
    return (
      <Container>
        <Row>
          <Col md="6">
            <h2>City search</h2>
            <Form onSubmit={this.getCity.bind(this)} >
              <FormGroup>
                <Input type="text" name="city" id="city" placeholder="Type a city name" value={cityName} onChange={evt => this.setState({ cityName: evt.target.value })} />
              </FormGroup>
              <FormGroup>
                <Button onClick={this.getCity.bind(this)}>Search Forecast</Button>
                <Button onClick={this.clearCity.bind(this)}>Clear</Button>
              </FormGroup>
            </Form>
          </Col>
          <Col md="6">
            <Cities cities={userCities} clickedCity={this.clickedCity.bind(this)} removedCity={this.removeCity.bind(this)}/>
          </Col>
        </Row>        
        <CityDetails city={currentCity} loading={getCityStatus === AJAX_STATUS.loading} />
      </Container>
    );
  }
}

Home.propTypes = {
  currentCity: PropTypes.object,
  getCityStatus: PropTypes.string.isRequired,
  getCity: PropTypes.func.isRequired,
  resetCity: PropTypes.func.isRequired,
  getUserCities: PropTypes.func.isRequired,
  userCities: PropTypes.array.isRequired,
  removeCity: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    currentCity: state.cities.currentCity,
    getCityStatus: state.cities.getStatus,
    userCities: state.cities.userCities,
  };
};

const HomeContainer = connect(mapStateToProps, {
  getCity,
  resetCity,
  getUserCities,
  removeCity,
})(Home);

export default HomeContainer;
