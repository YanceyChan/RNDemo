

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import MyPage from './MyPage';

class Home extends Component {
    static navigationOptions = {
        title: 'Home',
    };

    render(){
        const { navigate } = this.props.navigation;
        return(

            <View style={{flex: 1, backgroundColor: 'yellow', justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity onPress={()=>navigate('My')}>
                    <Text>click me!</Text>
                </TouchableOpacity>
            </View>
        );
    }
}



const HomePage = StackNavigator({
    Home: {
        screen: Home,
    },
    My: {
        screen: MyPage,
    },
})

export default HomePage;


