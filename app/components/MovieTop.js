import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {reduxForm} from 'redux-form';

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
          <View style={styles.loading}>
            <Text style={styles.welcome}>Loading...</Text>
          </View>
        )
      } else {
        return (
          <MovieList movies={filteredSearch} navigator={this.props.navigator}/>
        )
      }
    }
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to the movie app
        </Text>
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