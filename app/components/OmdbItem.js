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

var OmdbItem = React.createClass({
  render: function() {
    const {movie} = this.props;
    console.log(this.props)
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

const mapStateToProps = state => ({
  movie: state.omdb.movie
});

const mapDispatchToProps = dispatch => ({
  omdbNav: () => dispatch({ type: 'goToOmdbTop' })
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(OmdbItem);