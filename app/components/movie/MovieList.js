import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import Movie from './Movie';
import Search from './../search/Search';

import {getMovies} from '../../actions';

import {movieListStyles} from '../../styles';
const styles = StyleSheet.create(movieListStyles);

var MovieList = React.createClass({
  componentWillMount: function(){
    this.props.getMovies()
  },
  render: function() {
    console.log(this.props)
      const {movieList, search} = this.props;
	  	var renderMovies = () => {
        if(movieList && movieList != undefined){
          // var filteredSearch = movieList.filter((movie) => {
          //   var text = movie.title.toLowerCase();
          //   var value = search.moviesearch.search.value;
          //   return value = undefined || value.length === 0 || text.indexOf(value.toLowerCase()) > -1
          // });
  	  		return movieList.map((movie, index) => {
  	  			return (
  		    		<Movie 
  		    			title={movie.title}
                id={movie._id}
                image={movie.image}
                genre={movie.genre}
                overview={movie.overview}
                comments={movie.comments}
  		    			key={index}
  		    		/>	  			
  			    )
  	  		})
        } else {
          return (
            <View></View>
          )
        }
	  	}
      var renderSearch = () => {
        if(search.moviesearch){
          return (
            <View>
              <Search/>
              {renderMovies()}
            </View>
          )
        } else {
          return (
            <View></View>
          )
        }
      }
	  return (
		    <View style={styles.container}>
          <ScrollView
            automaticallyAdjustContentInsets={false}
            contentContainerStyle={styles.scrollViewContainer}
          >
          {renderMovies()}
          </ScrollView>
		    </View>
	  );
  }
});

var mapStateToProps = (state) => {
  return {
    movieList: state.movies.movieList,
    search: state.form
  }
}

const mapDispatchToProps = dispatch => ({
  getMovies: () => dispatch(getMovies)
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(MovieList);