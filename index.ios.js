import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {reduxForm} from 'redux-form';

import App from './app/components/App';

var Movies = React.createClass({
  render: function() {
    return (
      <App/>
    );
  }
});

AppRegistry.registerComponent('movies', () => Movies);
