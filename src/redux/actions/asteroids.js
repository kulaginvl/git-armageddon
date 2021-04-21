// import axios from 'axios';

// export const setLoaded = (payload) => ({
//   type: 'SET_LOADED',
//   payload,
// });

// export const asteroid = () => (dispatch) => {
//   dispatch({
//     type: 'SET_LOADED',
//     payload: false,
//   });

//   axios
//     .get(
//       `https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY`,
//     )
//     .then(
//       ({ data }) => {
//         dispatch(setAsteroids(data));
//       },
//       //   (response) => {
//       //     console.log(response);
//       //   },
//     );
// };

export const setAsteroids = (items) => ({
  type: 'SET_ASTEROIDS',
  payload: items,
});
