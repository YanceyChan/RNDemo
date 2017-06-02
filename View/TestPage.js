import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

export default class TestPage extends Component {
    render(){
        return(
            <View style={{flex: 1, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity>
                    <Text>test text</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
