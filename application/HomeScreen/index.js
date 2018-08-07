import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import counterReducer from './reducer/counterReducer';

// import HomeScreenView from './homeScreenView';
import StarWarsView from './StarWars';

export default class HomeScreen extends Component {
  render() {
    return (
      <Provider store={createStore(counterReducer, applyMiddleware(thunk))}>
        <StarWarsView />
      </Provider>
    );
  }
}
