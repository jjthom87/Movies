import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
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
});

module.exports = connect()(Main);