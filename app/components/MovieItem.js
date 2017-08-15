import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Octicons';
import StarRating from 'react-native-star-rating';
import axios from 'axios';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';

import CommentList from './CommentList';

import {thumbnails} from './images';

var MovieItem = React.createClass({
  getInitialState: function(){
    return {
      starCount: 0,
      commentText: '',
      nameText: '',
      starAverage: ''
    }
  },
  onBack: function(){
    this.props.navigator.pop();
  },
  onStarRatingPress: function(rating) {
    this.setState({
      starCount: rating
    });
  },
  addComment: function(){
    const creds = {
      name: this.state.nameText,
      comment: this.state.commentText,
      stars: this.state.starCount,
      id: this.props.route.id
    }
    axios.post('http://localhost:3000/v1/postComment', {creds}, {
    }).then((response) => {
          this.props.navigator.pop();
      }).catch((err) => {
          console.log(err)
      })
  },
  render: function() {
    const {genre, name, overview, image, comments} = this.props.route;
    const thumbnail = thumbnails[name];
    let num = 0;
    if(comments.length > 0){
      comments.forEach((comment) => {
        num += comment.stars;
      })
    }
    var average = num/comments.length;
    const starCountAverage = () => {
        return (
          <View style={styles.movieOverviewTitle}>
            <Text style={styles.plotWording}>User Rating: {average}</Text>
          </View>
        )
    }

	  return (
		    <View style={styles.container}>
          <View style={styles.topBar}>
            <TouchableOpacity onPress={this.onBack}>
              <Icon name="chevron-left" size={20} color="black"/>
            </TouchableOpacity>
          </View>
          <Image 
            source={thumbnail}
            style={styles.movieImage}
          /> 
          <Text>{name}</Text>
          <View style={styles.movieOverviewTitle}>
            <Text style={styles.plotWording}>Plot</Text>
          </View>
          <Text>{overview}</Text>
          <View style={styles.movieOverviewTitle}>
            <Text>Genre: {genre}</Text>
          </View>
          <StarRating
            disabled={false}
            emptyStar={'ios-star-outline'}
            fullStar={'ios-star'}
            halfStar={'ios-star-half'}
            iconSet={'Ionicons'}
            maxStars={5}
            rating={this.state.starCount}
            selectedStar={(rating) => this.onStarRatingPress(rating)}
            starColor={'blue'}
          />
          <View style={styles.inputContainer}>
            <TextInput
              onChangeText={(nameText) => {
                this.setState({nameText})
              }}
              placeholder="Your Name"
              style={styles.input}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              onChangeText={(commentText) => {
                this.setState({commentText})
              }}
              placeholder="Please Comment"
              style={styles.input}
            />
          </View>
          <TouchableOpacity onPress={this.addComment}>
            <Icon name="check" size={20} color="black"/>
          </TouchableOpacity>
          {starCountAverage()}
          <View style={styles.movieOverviewTitle}>
            <CommentList comments={comments}/>
          </View>
		    </View>
	  );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  movieImage: {
    justifyContent: 'space-between',
    marginTop: 20,
    paddingTop: 60,
    height: 150,
    width: 100
  },
  movieOverviewTitle: {
    paddingTop: 20
  },
  plotWording: {
    textDecorationLine: 'underline',
    color: 'black'
  },
  arrow: {
    paddingRight: 50
  },
  topBar: {
    padding: 16,
    paddingTop: 28,
    paddingBottom: 8,
    marginRight: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputContainer: {
    padding: 5,
    paddingLeft: 10,
    margin: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#2ecc71'
  },
  input: {
    height: 26
  }
});

module.exports = MovieItem;