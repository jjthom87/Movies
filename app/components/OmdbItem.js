import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Octicons';
import {connect} from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';

import {omdbItemStyles} from '../styles';
const styles = StyleSheet.create(omdbItemStyles);

var OmdbItem = React.createClass({
  render: function() {
    const {movie} = this.props;
    if(movie != undefined){
    	return (
    		<View style={styles.container}>
          <View style={styles.topBar}>
            <TouchableOpacity onPress={this.props.omdbNav}>
              <Icon name="arrow-left" size={20} color="black"/>
            </TouchableOpacity>
          </View>
          <Image 
            source={{uri: movie.Poster}}
            style={styles.movieImage}
          /> 
          <Text>{movie.Title}</Text>
          <View style={styles.movieOverviewTitle}>
            <Text style={styles.plotWording}>Plot</Text>
          </View>
          <Text style={styles.overviewWording}>{movie.Plot}</Text>
          <View style={styles.movieOverviewTitle}>
            <Text>Genre: {movie.Genre}</Text>
          </View>
    		</View>
    	 );
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.topBar}>
            <TouchableOpacity onPress={this.props.omdbNav}>
              <Icon name="arrow-left" size={20} color="black"/>
            </TouchableOpacity>
          </View>
        </View>
      )
    }
  }
});

const mapStateToProps = state => ({
  movie: state.omdb.movie
});

const mapDispatchToProps = dispatch => ({
  omdbNav: () => dispatch({ type: 'goToOmdbTop' })
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(OmdbItem);