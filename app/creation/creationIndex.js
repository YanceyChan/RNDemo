import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    ListView
} from 'react-native';

export default class VideoPage extends Component {
    constructor(props) {
        super(props);
        let ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.state = {
            dataSource: ds.cloneWithRows([]),
        };
    }

    renderRow(row){

    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>列表页面</Text>
                </View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow()}
                    enableEmptySections={true}
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5fcff',
    },
    header: {
        paddingTop: 25,
        paddingBottom: 12,
        backgroundColor: '#ee735c'
    },
    headerTitle: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: '600'
    }
})
