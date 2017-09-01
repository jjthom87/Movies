import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import {Provider} from 'react-redux';

import App from './app/components/App';

import {configureStore} from './app/store';

class Movies extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
      	<App/>
      </Provider>
    );
  }
};

AppRegistry.registerComponent('movies', () => Movies);
