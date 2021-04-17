import React from 'react';

import './App.css';

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import { Route } from 'react-router-dom';

function App() {
  let key = 'UGpWHsh8FSadzpcYFKGkk6OoxjQPEXqx1gswS13q';
  let date = '2015-09-08';
  let url = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=' + date + '&api_key=' + key;
  const [asteroids, setAsteroids] = React.useState([]);
  React.useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((json) => {
        setAsteroids(json.near_earth_objects[date]);
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
