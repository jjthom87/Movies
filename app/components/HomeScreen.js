import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import OmdbTop from './OmdbTop';
import MovieTop from './MovieTop'

var HomeScreen = React.createClass({
  toAllMovies: function(){
    this.props.navigator.push({
      component: OmdbTop,
      title: 'Search All Movies by Title'
    })
  },
  toMyMovies: function(){
    this.props.navigator.push({
      component: MovieTop,
      title: 'View and Comment on My Favorite Movies'
    })
  },
  render: function(){
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to the Movie App</Text>
        <View style={styles.wording}>
          <TouchableOpacity onPress={this.toAllMovies}>
            <Text style={styles.word}>Search All Movies</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.wording}>
          <TouchableOpacity onPress={this.toMyMovies}>
            <Text style={styles.word}>My Favorite Movies</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 20,
  },
  wording: {
    padding: 20
  },
  word: {
    padding: 20,
    marginLeft: 6, 
    backgroundColor: '#2ecc71',
    borderColor: '#2ecc71',
    borderRadius: 4,
    color: 'white', 
    alignItems: 'center', 
    justifyContent: 'center',
    overflow: 'hidden'
  }
});

module.exports = HomeScreen;