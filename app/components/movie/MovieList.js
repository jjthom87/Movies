import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

import Movie from './Movie';

var MovieList = React.createClass({
  render: function() {
  	  const {movies} = this.props;
	  	var renderMovies = () => {
	  		return movies.map((movie, index) => {
	  			return (
		    		<Movie 
		    			title={movie.title}
              id={movie._id}
              image={movie.image}
              genre={movie.genre}
              overview={movie.overview}
              navigator={this.props.navigator}
              comments={movie.comments}
		    			key={index}
		    		/>	  			
			    )
	  		})
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  }
});

module.exports = MovieList;