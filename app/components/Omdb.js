import React, { Component } from 'react';
import {reduxForm} from 'redux-form';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { NavigationActions } from 'react-navigation';

import {omdbSearch} from '../actions';

var Omdb = React.createClass({
  setOmdb: function(){
    var {dispatch, fields: {input}} = this.props;
      dispatch(omdbSearch(input.value));
      this.props.omdbNav();
  },
  render: function() {
    var {fields: {input}} = this.props;
	  return (
	    <View style={styles.container}>
	      <View style={styles.field}>
	        <TextInput
            {...input}
	          placeholder="Search Movie from Omdb by Title"
	          style={styles.textInput}
	        />
          <View style={{alignItems: 'center'}}>
  	        <TouchableOpacity onPress={this.setOmdb}>
              <Text style={{color: "white", width: 50, textAlign: 'center', fontFamily: 'HelveticaNeue-Bold'}}>Search</Text>
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
  },
  field: {
  	borderRadius: 5,
  	padding: 5,
  	paddingLeft: 8,
  	margin: 7,
  	marginTop: 0,
    backgroundColor: '#2ecc71'
  },
  textInput: {
  	height: 26,
  	width: 300,
    backgroundColor: 'white'
  }
});

const mapDispatchToProps = dispatch => ({
  omdbNav: () => dispatch({ type: 'goToOmdb' })
});

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
}, null, mapDispatchToProps)(Omdb);