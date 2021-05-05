import axios from 'axios';
let date = new Date();
let dd = String(date.getDate()).padStart(2, '0');
let mm = String(date.getMonth() + 1).padStart(2, '0');
let yyyy = date.getFullYear();
date = yyyy + '-' + mm + '-' + dd;

export const fetchAsteroids = () => (dispatch) => {
  axios
    .get(
      'https://api.nasa.gov/neo/rest/v1/feed?start_date=' +
        date +
        '&api_key=UGpWHsh8FSadzpcYFKGkk6OoxjQPEXqx1gswS13q',
    )
    .then(({ data }) => {
      dispatch(setAsteroids([].concat.apply([], Object.values(data.near_earth_objects))));
    });
};

export const setAsteroids = (items) => ({
  type: 'SET_ASTEROIDS',
  payload: items,
});
