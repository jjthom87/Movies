import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

var Search = React.createClass({
  getInitialState: function(){
    return { 
    	text: '' 
    }
  },
  onSearchMovie: function(text){
    this.setState({text})
  },
  render: function() {
	  return (
	    <View style={styles.container}>
	      <View style={styles.field}>
	        <TextInput
	          placeholder="Search Movie"
	          style={styles.textInput}
        	  onChangeText={this.props.onSearchMovie}
	        />
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

module.exports = Search