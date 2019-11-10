import React, { Component } from 'react';

import { MoonLoader } from 'react-spinners';

import classes from './App.module.css';
import assetMapping from '../../assets/assetMapping.json';

class App extends Component {

  state = {
    searchBarInput: '',
    weatherDetails: {
      temperature: null,
      description: ''
    },
    loading: false,
    error: false
  }

  render() {
    return (
      <div className={classes.AppWrapper}>
        Planned Weather App
      </div>
    );
  }
}

export default App;
