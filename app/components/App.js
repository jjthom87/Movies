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

var App = React.createClass({
  getInitialState: function(){
    return {}
  },
  render: function() {
    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle="light-content"/>
        <Main/>
      </View>
    )
  }
});

module.exports = App;