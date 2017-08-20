import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity
} from 'react-native';

import Search from './Search';
import MovieList from './MovieList';

var MovieTop = React.createClass({
  getInitialState: function(){
    return {
      loading: false,
      movie: '',
      movies: [],
      searchInput: ''
    }
  },
  setModalVisible: function(visible) {
    this.setState({modalVisible: true});
  },
  setModalInvisible: function(){
    this.setState({modalVisible: false});
  },
  searchMovie: function(input){
    this.setState({
      searchInput: input.toLowerCase()
    })
  },
  componentWillMount: function(){
    this.setState({loading: true})
    fetch('http://localhost:3000/v1/getMovies', {
      headers: {
          'content-type': 'application/json',
          'accept': 'application/json'
      }
    }).then((response) => response.json())
    .then((results) => {
      if(results){
        console.log(results)
        this.setState({
          loading: false,
          movies: results
        })
      }
    });
  },
  render: function() {
    const filteredSearch = this.state.movies.filter((movie) => {
      var text = movie.title.toLowerCase();
      return this.state.searchInput.length === 0 || text.indexOf(this.state.searchInput) > -1
    });

    var renderList = () => {
      if(this.state.loading){
        return (
          <Animated.View style={styles.loading}>
            <Text style={styles.welcome}>Loading...</Text>
          </Animated.View>
        )
      } else {
        return (
          <MovieList movies={filteredSearch} navigator={this.props.navigator}/>
        )
      }
    }
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>My Favorite Movies</Text>
        <Search onSearchMovie={this.searchMovie}/>
        {renderList()}
      </View>
    );
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
  loading: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  }
});

module.exports = MovieTop;