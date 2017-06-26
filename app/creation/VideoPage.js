import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native';

export default class VideoPage extends Component {
    render(){
        return(
            <View style={{flex: 1, backgroundColor: '#eee', justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity>
                    <Text>Video Page</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
