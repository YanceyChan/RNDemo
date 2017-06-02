

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';


export default class MyPage extends Component {

    render(){
        const { params } = this.props.navigation.state;
        return(
            <View style={{flex: 1, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                    <Text>{params.message}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
