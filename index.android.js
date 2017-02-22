/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import CC from './src/wskeee/edemo/views/MainView';

export default class EDome extends Component {
  render() {
    return (
      <CC/>
    );
  }
}

AppRegistry.registerComponent('EDome', () => EDome);
