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

import {omdbTopStyles} from '../styles';
const styles = StyleSheet.create(omdbTopStyles);

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

const mapDispatchToProps = dispatch => ({
  homeNav: () => dispatch({ type: 'goToHomeScreen' })
});

module.exports = connect(null, mapDispatchToProps)(OmdbTop);