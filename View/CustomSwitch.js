import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native';


export default class CustomSwitch extends Component {

    render(){
        // const { params } = this.props.navigation.state;
        return(
            <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                    <Text style={{fontSize: 28}}>CustomSwitch</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
