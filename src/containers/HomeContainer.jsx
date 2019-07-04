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
  Label,
  Button,
} from 'reactstrap';
import { connect } from 'react-redux';
import { AJAX_STATUS } from '../actions/constants';
// core components
import CityDetails from '../components/CityDetails.jsx';
import { getCity, resetCity } from '../actions/cities';


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

  clearCity() {
    const { resetCity } = this.props;
    this.setState({ cityName: '' });
    resetCity();
  }

  render() {
    const { currentCity, getCityStatus } = this.props;
    const { cityName } = this.state;
    return (
      <Container>
        <Row>
          <Col md="12">
            <Form onSubmit={this.getCity.bind(this)} >
              <FormGroup>
                <Label for="city">City</Label>
                <Input type="text" name="city" id="city" placeholder="Type a city name" value={cityName} onChange={evt => this.setState({ cityName: evt.target.value })} />
              </FormGroup>
              <Button onClick={this.getCity.bind(this)}>Search Forecast</Button>
              <Button onClick={this.clearCity.bind(this)}>Clear</Button>
            </Form>
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
};

const mapStateToProps = (state) => {
  return {
    currentCity: state.cities.currentCity,
    getCityStatus: state.cities.getStatus,
  };
};

const HomeContainer = connect(mapStateToProps, {
  getCity,
  resetCity,
})(Home);

export default HomeContainer;
