import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
  View,
  StatusBar,
} from 'react-native';

import AppNavigation from '../navigation';

const App = () => (
  <View style={{flex: 1}}>
    <StatusBar barStyle="light-content"/>
    <AppNavigation/>
  </View>
);

export default App;