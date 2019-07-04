// npm packages
import axios from 'axios';
import { WEATHER_API, WEATHER_KEY } from '../config.json';

export const getCity = name => axios.get(`${WEATHER_API}?q=${name}&APPID=${WEATHER_KEY}`)
  .then(res => res.data.body);
