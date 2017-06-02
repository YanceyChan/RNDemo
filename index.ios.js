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
    View,
} from 'react-native';

import HomePage from './View/HomePage';

export default class RNDemo extends Component {
    render(){
        return(
          <HomePage/>
        );
    }
}


AppRegistry.registerComponent('RNDemo', () => RNDemo);
