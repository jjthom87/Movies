import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';

import MovieList from './../movie/MovieList';

import {movieTopStyles} from '../../styles';
const styles = StyleSheet.create(movieTopStyles);

var MovieTop = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
          <TouchableOpacity onPress={this.props.homeNav}>
            <Icon name="arrow-left" size={20} color="black"/>
          </TouchableOpacity>
        </View>
        <Text style={styles.welcome}>My Favorite Movies</Text>
        <MovieList/>
      </View>
    );
  }
});

const mapDispatchToProps = dispatch => ({
  homeNav: () => dispatch({ type: 'goToHomeScreen' })
})

module.exports = connect(null, mapDispatchToProps)(MovieTop)