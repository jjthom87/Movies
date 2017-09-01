import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import Main from './Main';
import AppNavigation from '../navigation';

var App = React.createClass({
  render: function() {
    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle="light-content"/>
        <AppNavigation/>
      </View>
    )
  }
});

export default App;