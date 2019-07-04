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

// core components
import LocationMap from '../components/Map.jsx';
import { getCity } from '../actions/cities';


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

  render() {
    const { currentCity, getCityStatus } = this.props;
    const { cityName } = this.state;
    return (
      <Container>
        <Row>
          <Form onSubmit={this.getCity.bind(this)} >
            <FormGroup>
              <Label for="city">City</Label>
              <Input type="text" name="city" id="city" placeholder="Type a city name" value={cityName} onChange={evt => this.setState({ cityName: evt.target.value })} />
            </FormGroup>
            <Button onClick={this.getCity.bind(this)}>Submit</Button>
          </Form>
        </Row>
      </Container>
    );
  }
}

Home.propTypes = {
  currentCity: PropTypes.object.isRequired,
  getCityStatus: PropTypes.string.isRequired,
  getCity: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    currentCity: state.cities.currentCity,
    getCityStatus: state.cities.getStatus,
  };
};

const HomeContainer = connect(mapStateToProps, {
  getCity,
})(Home);

export default HomeContainer;
