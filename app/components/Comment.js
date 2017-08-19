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
  getInitialState: function(){
    return {
    }
  },
  render: function() {
  	const {name, text, stars} = this.props;
	  return (
		<View>
			<Text style={{fontSize: 10}}>{name}: {text}</Text>
		</View>
	  );
  }
});

const styles = StyleSheet.create({
});

module.exports = Comment;