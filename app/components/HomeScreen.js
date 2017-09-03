import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import {homeStyles} from '../styles';
const styles = StyleSheet.create(homeStyles);

const HomeScreen = ({navigation}) => (
  <View style={styles.container}>
    <Text style={styles.welcome}>Welcome to the Movie App</Text>
    <View style={styles.wording}>
      <TouchableOpacity onPress={() => navigation.dispatch({ type: 'goToOmdbTop' })}>
        <Text style={styles.word}>Search All Movies</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.wording}>
      <TouchableOpacity onPress={() => navigation.dispatch({ type: 'goToMovieTop' })}>
        <Text style={styles.word}>My Favorite Movies</Text>
      </TouchableOpacity>
    </View>
  </View>
);

module.exports = HomeScreen;