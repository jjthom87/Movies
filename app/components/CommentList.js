import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import Comment from './Comment';

var CommentList = React.createClass({
  render: function() {
  	  const {comments} = this.props;
	  	var renderComments = () => {
	  		if(comments && comments.length > 0){
		  		return comments.map((comment, index) => {
		  			return (
			    		<Comment 
			    			name={comment.name}
			    			text={comment.text}
			    			stars={comment.stars}
			    			key={index}
			    		/>	  			
				    )
	  			})
	  		} else {
	  			return (
	  				<Text>No Comments</Text>
	  			)
	  		}
	  	}
	  return (
		<View style={styles.container}>
          <ScrollView
            automaticallyAdjustContentInsets={false}
            contentContainerStyle={styles.scrollViewContainer}
          >
		  {renderComments()}
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

module.exports = CommentList;