import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  AlertIOS
} from 'react-native';
import Modal from 'react-native-modal';

import Omdb from './Omdb';
import OmdbItem from './OmdbItem';
import api from './../api/movie_api';

var OmdbTop = React.createClass({
  getInitialState: function(){
    return {
      omdbLoading: false,
      omdb: [],
      omdbInput: '',
      modalVisible: false
    }
  },
  setModalVisible: function() {
    this.setState({modalVisible: true});
  },
  setModalInvisible: function(){
    this.setState({modalVisible: false});
  },
  searchOmdb: function(input){
    api.getMovies(input).then((movie) => {
      if(input === ""){
        this.setModalVisible()
      } else {
        if(movie.Error){
          AlertIOS.alert('No movie with that name')
        } else {
          if(movie){
            this.setState({omdbLoading: false})
            this.state.omdb.push(movie)
            this.props.navigator.push({
              component: OmdbItem,
              title: 'Omdb Item',
              navigationBarHidden: true,
              movie: this.state.omdb
            });
          } else {
            this.setState({omdbLoading: true})
          }
        }
      }
    })
  },
  render: function() {
    const renderModal = (text) => {
      return (
            <Modal 
              isVisible={this.state.modalVisible}
              backdropColor={'#2ecc71'}
              backdropOpacity={1}
              animationIn={'zoomInDown'}
              animationOut={'zoomOutUp'}
              animationInTiming={1000}
              animationOutTiming={1000}
              backdropTransitionInTiming={1000}
              backdropTransitionOutTiming={1000}
            >
              <View style={styles.modalContent}>
                <Text>{text}</Text>
                <Text onPress={this.setModalInvisible} style={styles.noInput}>X</Text>
              </View>
            </Modal>
          )
    }
    var renderOmdb = () => {
      if(this.state.omdbLoading){
        return (
          <View style={styles.loading}>
            <Text style={styles.welcome}>Loading...</Text>
          </View>
        )
      } else {
        return (
          <Omdb searchOmdb={this.searchOmdb}/>
        )
      }
    }
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Search All Movies
        </Text>
        {renderOmdb()}
        {renderModal("Please Input Movie")}
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 20,
  },
  loading: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    flexDirection: 'row'
  },
  noInput: {
    padding: 2,
    marginLeft: 6, 
    backgroundColor: '#ff766c',
    borderColor: '#ff766c',
    borderRadius: 4,
    color: 'white', 
    alignItems: 'center', 
    justifyContent: 'center',
    overflow: 'hidden'
  }
});

module.exports = OmdbTop;