import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  NavigatorIOS,
} from 'react-native';

import MovieItem from './MovieItem';

var Movie = React.createClass({
  getInitialState: function(){
    return {
      clicked: ''
    }
  },
  movieClick: function(){
    this.props.navigator.push({
      component: MovieItem,
      title: 'Movie Item',
      name: this.props.title,
      overview: this.props.overview,
      genre: this.props.genre,
      image: this.props.image,
      id: this.props.id,
      comments: this.props.comments,
      navigationBarHidden: true
    })
  },
  render: function() {
  	const {title, id} = this.props;
	  return (
		    <View style={styles.movieContainer}>
          <TouchableOpacity onPress={this.movieClick}>
		    	   <Text>{title}</Text>
          </TouchableOpacity>
		    </View>
	  );
  }
});

const styles = StyleSheet.create({
  movieContainer: {
    padding: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginTop: -1,
    borderColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffd9a1',
    width: 300
  }
});

module.exports = Movie;