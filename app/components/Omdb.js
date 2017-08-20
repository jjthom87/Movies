import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

var Omdb = React.createClass({
  getInitialState: function(){
    return {
    	omdbSearchText: ''
    }
  },
  onSearchMovie: function(omdbSearchText){
    this.setState({omdbSearchText})
  },
  onMovieSearch: function(){
    this.props.searchOmdb(this.state.omdbSearchText)
    this._textInput.setNativeProps({text: ''});
  },
  render: function() {
	  return (
	    <View style={styles.container}>
	      <View style={styles.field}>
	        <TextInput
	          placeholder="Search Movie from Omdb by Title"
	          style={styles.textInput}
        	  onChangeText={this.onSearchMovie}
            ref={component => this._textInput = component}
	        />
          <View style={{alignItems: 'center'}}>
  	        <TouchableOpacity onPress={this.onMovieSearch}>
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

module.exports = Omdb;