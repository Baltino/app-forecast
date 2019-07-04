// npm packages
import axios from 'axios';

export const getCity = name => axios({
  url: '',
  method: 'GET',
  data: JSON.stringify({
    name,
  }),
})
  .then(res => res.data.body);
