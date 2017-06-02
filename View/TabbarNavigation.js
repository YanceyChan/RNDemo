import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { TabNavigator } from "react-navigation";

import HomePage from './HomePage';
import TestPage from './TestPage';

const MainScreenNavigator = TabNavigator({
  Home: {
    screen: HomePage,
    navigationOptions:{
      tabBarLabel: '主页'
    }

   },
  Test: {
    screen: TestPage,
    navigationOptions:{
      tabBarLabel: '测试'
    }
  },
});

export default MainScreenNavigator;
