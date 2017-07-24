import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native';

export default class DetailPage extends Component {
    render(){
        const { params } = this.props.navigation.state;
        return(
            <View style={{flex: 1, backgroundColor: '#eee', justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity>
                    <Text>DetailPage Page...{params.rowID}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
