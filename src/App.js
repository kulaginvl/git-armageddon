import React from 'react';

import './App.css';

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import { Route } from 'react-router-dom';

function App() {
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
