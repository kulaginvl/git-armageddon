import React from 'react';

import axios from 'axios';

import './App.css';

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import { Route } from 'react-router-dom';

import { setAsteroids } from './redux/actions/asteroids';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    let date = new Date();
    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth() + 1).padStart(2, '0');
    let yyyy = date.getFullYear();
    date = yyyy + '-' + mm + '-' + dd;
    console.log(date);

    axios
      .get(
        'https://api.nasa.gov/neo/rest/v1/feed?start_date=' +
          date +
          '&api_key=UGpWHsh8FSadzpcYFKGkk6OoxjQPEXqx1gswS13q',
      )
      .then(({ data }) => {
        dispatch(setAsteroids(data.near_earth_objects[date]));
      });
  }, []);

  return (
    <div className="app-wrapper">
      <Header />
      <div className="app-wrapper-content">
        <Route path="/" component={Home} exact />
        {/* <Route path="/cart" component={Cart} exact /> */}
      </div>
    </div>
  );
}

export default App;

// const mapStateToProps = (state) => {
//   return {
//     items: state.asteroids.items,
//     filters: state.filters,
//   };
// };
// const mapDispatchToProps = {
//   setAsteroids,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
