import React, { Component } from 'react';
import {reduxForm} from 'redux-form';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

import {omdbSearch} from '../actions';

var Omdb = React.createClass({
  render: function() {
    var {dispatch, fields: {input}} = this.props;
    console.log(this.props)
	  return (
	    <View style={styles.container}>
	      <View style={styles.field}>
	        <TextInput
            {...input}
	          placeholder="Search Movie from Omdb by Title"
	          style={styles.textInput}
	        />
          <View style={{alignItems: 'center'}}>
  	        <TouchableOpacity onPress={() => dispatch(omdbSearch(input.value))}>
              <Text style={{color: "#2ecc71", width: 50, textAlign: 'center', fontFamily: 'HelveticaNeue-Bold'}}>Search</Text>
            </TouchableOpacity>
          </View>
	      </View>
	    </View>
	  );
  }
});

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    paddingTop: 20,
    backgroundColor: '#2ecc71'
  },
  field: {
  	borderRadius: 5,
  	padding: 5,
  	paddingLeft: 8,
  	margin: 7,
  	marginTop: 0,
  	backgroundColor: 'white'
  },
  textInput: {
  	height: 26,
  	width: 300
  }
});

var mapStateToProps = (state) => {
  return {
    omdbComponent: state.omdb
  }
}

var validate = (formProps) => {
  var errors = {};
  if(!formProps.input){
    errors.input = "Please input a movie.";
  }
  return errors;
}

export default reduxForm({
  form: 'omdb',
  fields: ['input'],
  validate: validate
}, mapStateToProps, null)(Omdb);