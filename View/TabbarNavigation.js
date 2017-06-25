import React from 'react';
import { TabNavigator } from "react-navigation";
import HomePage from './HomePage';
import TestPage from './TestPage';
import Icon from "react-native-vector-icons/Ionicons";

const MainScreenNavigator = TabNavigator({
  Home: {
    screen: HomePage,
    navigationOptions:{
        tabBarLabel: '主页',
        tabBarIcon: ({ focused, tintColor})=>(
              focused?
              <Icon name='ios-home' size={30} color='#ca7657'/> :
                  <Icon name='ios-home-outline' size={30} color='#6e5b25'/>
        ),
    }

   },
  Test: {
    screen: TestPage,
    navigationOptions:{
        tabBarLabel: '更多',
        tabBarIcon: ({ focused, tintColor})=>(
            focused?
                <Icon name='ios-more' size={30} color='#ca7657'/> :
                <Icon name='ios-more-outline' size={30} color='#6e5b25'/>
        ),
    }
  },
},{
    tabBarOptions: {
        activeTintColor: '#ca7657', // 文字和图片选中颜色
        inactiveTintColor: '#6e5b25', // 文字和图片默认颜色
        showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
        indicatorStyle: {height: 0}, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了， 不知道还有没有其它方法隐藏？？？
        style: {
            backgroundColor: '#fff', // TabBar 背景色
        },
        labelStyle: {
            fontSize: 12, // 文字大小
        },
    },
});

export default MainScreenNavigator;
