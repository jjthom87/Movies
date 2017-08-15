import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  NavigatorIOS
} from 'react-native';

import MovieTop from './MovieTop';

var Main = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: MovieTop,
          title: 'Movie Top',
          navigationBarHidden: true
        }}
        style={{flex: 1}}
      />
    );
  }
})

module.exports = Main;