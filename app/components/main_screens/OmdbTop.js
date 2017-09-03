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

import Omdb from './../omdb/Omdb';

import {omdbTopStyles} from '../../styles';
const styles = StyleSheet.create(omdbTopStyles);

import {modalInvisible} from '../../actions';

var OmdbTop = React.createClass({
  modalBack: function(){
    this.props.modal();
    this.props.backToOmdbTop();
  },
  render: function() {
    const renderModal = (text) => {
      return (
        <Modal 
          isVisible={this.props.modalVisible}
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
            <Text onPress={this.modalBack} style={styles.noInput}>X</Text>
          </View>
        </Modal>
      )
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
        <Omdb/>
        {renderModal("Please Input Movie")}
      </View>
    );
  }
});

const mapStateToProps = state => ({
  modalVisible: state.omdb.modalVisible
})

const mapDispatchToProps = dispatch => ({
  homeNav: () => dispatch({ type: 'goToHomeScreen' }),
  backToOmdbTop: () => dispatch({ type: 'goToOmdbTop'}),
  modal: () => dispatch(modalInvisible)
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(OmdbTop);