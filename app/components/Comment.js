import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  NavigatorIOS,
} from 'react-native';

var Comment = React.createClass({
  render: function() {
  	const {name, text, stars} = this.props;
	  return (
  		<View>
  			<Text style={{fontSize: 10}}>{name}: {text}    rating: {stars}/5</Text>
  		</View>
	  );
  }
});

module.exports = Comment;