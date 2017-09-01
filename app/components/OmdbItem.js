import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Octicons';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';

var OmdbItem = React.createClass({
  onBack: function(){
    this.props.navigator.pop();
  },
  render: function() {
    console.log(this.props)
  	return (
  		<View style={styles.container}>
  		</View>
  	 );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  movieImage: {
    justifyContent: 'space-between',
    marginTop: 20,
    paddingTop: 60,
    height: 150,
    width: 100
  },
  movieOverviewTitle: {
    paddingTop: 10
  },
  plotWording: {
    textDecorationLine: 'underline',
    color: 'black',
    fontSize: 10
  },
  arrow: {
    paddingRight: 50
  },
  topBar: {
    padding: 16,
    paddingTop: 10,
    paddingBottom: 8,
    marginRight: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputContainer: {
    padding: 5,
    paddingLeft: 10,
    margin: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#2ecc71'
  },
  input: {
    height: 26
  },
  overviewWording: {
    fontSize: 10
  }
});

module.exports = OmdbItem;