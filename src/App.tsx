import React from 'react';
import './app.scss';
import MainBlock from './components/MainBlock';
import Home from './components/icons/Home';

const App = () => (
  <div className="app">
    <div className="app__header">
      <h1 className="app__title">New page</h1>
      <Home />
    </div>
    <MainBlock />
  </div>
);

export default App;
