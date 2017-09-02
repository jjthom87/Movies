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
import Icon from 'react-native-vector-icons/Octicons';

import {omdbSearch} from '../actions';

var Omdb = React.createClass({
  setOmdb: function(){
    var {dispatch, fields: {input}} = this.props;
      dispatch(omdbSearch(input.value));
      this.props.omdbNav();
  },
  render: function() {
    var {dispatch, fields: {input}} = this.props;
    console.log(this.props);
	  return (
	    <View style={styles.container}>
        <View style={styles.topBar}>
          <TouchableOpacity onPress={this.props.homeNav}>
            <Icon name="arrow-left" size={20} color="black"/>
          </TouchableOpacity>
        </View>
	      <View style={styles.field}>
	        <TextInput
            {...input}
	          placeholder="Search Movie from Omdb by Title"
	          style={styles.textInput}
	        />
          <View style={{alignItems: 'center'}}>
  	        <TouchableOpacity onPress={this.setOmdb}>
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
  topBar: {
    padding: 16,
    paddingTop: 10,
    paddingBottom: 8,
    marginRight: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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

const mapDispatchToProps = dispatch => ({
  omdbNav: () => dispatch({ type: 'goToOmdb' }),
  homeNav: () => dispatch({ type: 'goToHomeScreen' })
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