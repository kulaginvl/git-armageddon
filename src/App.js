import React from 'react';

import axios from 'axios';

import './App.css';

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import { Route } from 'react-router-dom';

function App() {
  let key = 'UGpWHsh8FSadzpcYFKGkk6OoxjQPEXqx1gswS13q';
  let date = '2020-09-08';
  let url = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=' + date + '&api_key=' + key;
  const [asteroids, setAsteroids] = React.useState([]);
  React.useEffect(() => {
    axios.get(url).then(({ data }) => {
      setAsteroids(data.near_earth_objects[date]);
    });
  }, []);
  console.log(asteroids);
  return (
    <div className="app-wrapper">
      <Header />
      <div className="app-wrapper-content">
        {/* <Route path="/" component={Home} exact /> */}
        <Route path="/" render={() => <Home items={asteroids} />} exact />
        {/* <Route path="/cart" component={Cart} exact /> */}
      </div>
    </div>
  );
}

export default App;
