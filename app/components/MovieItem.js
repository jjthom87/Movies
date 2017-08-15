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

import {thumbnails} from './images';

var MovieItem = React.createClass({
  getInitialState: function(){
    return {
    }
  },
  onBack: function(){
    this.props.navigator.pop();
  },
  render: function() {
    const {genre, name, overview, image} = this.props.route;
    const thumbnail = thumbnails[name];

	  return (
		    <View style={styles.container}>
          <View style={styles.topBar}>
            <TouchableOpacity onPress={this.onBack}>
              <Icon name="chevron-left" size={20} color="black"/>
            </TouchableOpacity>
          </View>
          <Image 
            source={thumbnail}
            style={styles.movieImage}
          /> 
          <Text>{name}</Text>
          <View style={styles.movieOverviewTitle}>
            <Text style={styles.plotWording}>Plot</Text>
          </View>
          <Text>{overview}</Text>
          <View style={styles.movieOverviewTitle}>
            <Text>Genre: {genre}</Text>
          </View>
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
    paddingTop: 20
  },
  plotWording: {
    textDecorationLine: 'underline'
  },
  arrow: {
    paddingRight: 50
  },
  topBar: {
    padding: 16,
    paddingTop: 28,
    paddingBottom: 8,
    marginRight: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

module.exports = MovieItem;