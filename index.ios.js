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

import TabbarNavigation from './View/TabbarNavigation';

export default class RNDemo extends Component {
    render(){
        return(
          <TabbarNavigation/>
        );
    }
}


AppRegistry.registerComponent('RNDemo', () => RNDemo);
