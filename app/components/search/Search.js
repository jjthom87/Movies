import React, { Component } from 'react';
import {reduxForm} from 'redux-form';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

import {searchMoviesStyles} from '../../styles';
const styles = StyleSheet.create(searchMoviesStyles);

var Search = React.createClass({
  	render: function() {
      console.log(this.props)
  		var {dispatch, fields: {search}} = this.props;
	  	return (
		    <View style={styles.container}>
		      	<View style={styles.field}>
			        <TextInput
			          {...search}
			          placeholder="Search Movie"
			          style={styles.textInput}
			          onChangeText={() => search.value}
			        />
		      	</View>
		    </View>
	  	);
  	}
});

var validate = (formProps) => {
  var errors = {};
  if(!formProps.movieSearch){
    errors.movieSearch = "Please search a movie.";
  }
  return errors;
}

export default reduxForm({
  form: 'moviesearch',
  fields: ['search'],
  validate: validate
}, null, null)(Search);