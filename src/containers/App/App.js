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

  // Update state with current search bar input
  searchBarHandler = (e) => {
    this.setState({
      searchBarInput: e.target.value
    })
  }

  // Reset state after clicking on Logo or Try Again button
  tryAgainHandler = () => {
    this.setState({
      searchBarInput: '',
      weatherDetails: {},
      error: false
    })
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
