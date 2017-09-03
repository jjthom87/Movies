import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  AlertIOS,
  TouchableOpacity
} from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Octicons';
import {connect} from 'react-redux';

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
          <Omdb/>
        )
      }
    }
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
          <TouchableOpacity onPress={this.props.homeNav}>
            <Icon name="arrow-left" size={20} color="black"/>
          </TouchableOpacity>
        </View>
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
  },
  topBar: {
    padding: 16,
    paddingTop: 10,
    paddingBottom: 8,
    marginRight: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});

const mapDispatchToProps = dispatch => ({
  homeNav: () => dispatch({ type: 'goToHomeScreen' })
});

module.exports = connect(null, mapDispatchToProps)(OmdbTop);