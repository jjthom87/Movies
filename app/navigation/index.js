import React, { Component } from 'react';
import {connect} from "react-redux";
import Routes from "./routes";

import {
  addNavigationHelpers,
  StackNavigator
} from 'react-navigation';

export const AppNavigator = StackNavigator(Routes);

const AppNavigation = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

const mapStateToProps = state => ({ nav: state.nav });

export default connect(mapStateToProps)(AppNavigation);