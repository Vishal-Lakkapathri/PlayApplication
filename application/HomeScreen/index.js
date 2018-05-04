import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import counterReducer from './reducer/counterReducer';

import HomeScreenView from './homeScreenView';

export default class HomeScreen extends Component {
  render() {
    return (
      <Provider store={createStore(counterReducer)}>
        <HomeScreenView />
      </Provider>
    );
  }
}
