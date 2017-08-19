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

import HomeScreen from './HomeScreen';

var Main = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: HomeScreen,
          title: 'Home Screen',
          navigationBarHidden: true
        }}
        style={{flex: 1}}
      />
    );
  }
})

module.exports = Main;