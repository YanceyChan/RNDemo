import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    ListView,
    TouchableHighlight,
    Dimensions,
    ActivityIndicator,
    RefreshControl,
    AlertIOS,
} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import request from '../common/request';
import config from '../common/config';
import detail from './detail';

import { StackNavigator } from 'react-navigation';

let width = Dimensions.get('window').width
var cachedResults = {
    nextPage: 1,
    items: [],
    total:0
}

class Item extends Component {
    constructor(props) {
        super(props);
        var row = this.props.row;
        this.state = {
            up: row.voted,
            row: row,
        }
    }

    _up() {
        let that = this;
        var up = !this.state.up
        var row = this.state.row
        var url = config.api.base +config.api.up

        var  body = {
            id : row._id,
            up: up? 'yes' : 'no',
            accessToken: 'abcee'
        }

        request.post(url, body)
            .then((data)=>{
                if (data && data.success){
                    that.setState({
                        up: up,
                    })
                }
                else  {
                    AlertIOS.alert('点赞失败！')
                }
            })
            .catch((error)=>{
                AlertIOS.alert('点赞失败！'+error)
            })
    }

    render () {
        var rowData = this.state.row;
        return(
            <TouchableHighlight onPress={this.props.onSelect}>
                <View style={styles.item}>
                    <Text style={styles.title}>{rowData.title}</Text>
                    <Image
                        source={{uri: rowData.thumb}}
                        style={styles.thumb}
                    >
                        <Icon
                            name='ios-play'
                            size={28}
                            style={styles.play} />
                    </Image>
                    <View style={styles.itemFooter}>
                        <View style={styles.handleBox}>
                            <Icon
                                name={this.state.up ?'ios-heart':'ios-heart-outline'}
                                size={28}
                                style={[styles.up, this.state.up ? null : styles.down]}
                                onPress={this._up.bind(this)}
                            />
                            <Text style={styles.handleText} onPress={this._up.bind(this)}>喜欢</Text>
                        </View>
                        <View style={styles.handleBox}>
                            <Icon
                                name='ios-chatboxes-outline'
                                size={28}
                                style={styles.commentIcon}
                            />
                            <Text style={styles.handleText}>评论</Text>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
}

class VideoPage extends Component {
    constructor(props) {
        super(props);
        let ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.state = {
            dataSource: ds.cloneWithRows([]),
            isLoadingTail: false,
            isRefreshing: false
        };
    }

    componentDidMount(){
        this._fetchData(1);
    }

    _fetchData(page){
        let that = this;

        if (page == 0) {
            //0是刷新
            this.setState({
                isRefreshing: true
            })
        }else  {
            //其他是加载
            this.setState({
                isLoadingTail: true
            })
        }

        //设置标志位
        this.setState({
            isLoadingTail: true
        })

        request.get(config.api.base + config.api.creations, {
            accessToken: 'abcdef',
            page: page,
        })
            .then((data)=>{
                if (data.success) {
                    var items = cachedResults.items.slice();

                    if (page !== 0) {
                        items = items.concat(data.data);
                        cachedResults.nextPage += 1;
                    }
                    else {
                        items = data.data.concat(items);
                    }

                    cachedResults.items = items;
                    cachedResults.total = data.total;

                    setTimeout(()=>{
                        if (page !== 0 ) {
                            that.setState({
                                isLoadingTail: false,
                                dataSource: that.state.dataSource.cloneWithRows(
                                    cachedResults.items
                                )
                            });
                        }
                        else  {
                            that.setState({
                                isRefreshing: false,
                                dataSource: that.state.dataSource.cloneWithRows(
                                    cachedResults.items
                                )
                            });
                        }

                    }, 500)

                }

            })
            .catch((error)=>{
                if (page !== 0) {
                    this.setState({
                        isLoadingTail: false,
                    })
                }else  {
                    this.setState({
                        isRefreshing: false,
                    })
                }

                console.warn(error);
            })
    }

    _renderRow(rowData){
        return <Item key={rowData._id} onSelect={()=>this._loadPage(rowData._id)} row={rowData} />
    }

    _hasMore() {
        return cachedResults.items.length < cachedResults.total
        // return (true);
    }

    _fetchMoreData() {
        if (!this._hasMore() || this.state.isLoadingTail) {
            return
        }

        var page = cachedResults.nextPage

        this._fetchData(page);
    }

    _renderFooter() {
        if (!this._hasMore() && cachedResults.total !== 0) {
            return (
                <View style={styles.loadingMore}>
                    <Text style={styles.loadingText}>么有更多了</Text>
                </View>
            )
        }


        if (!this.state.isLoadingTail) {
            return <View style={styles.loadingMore}/>
        }

        return <ActivityIndicator style={styles.loadingMore}/>
    }

    _loadPage (rowID) {
        this.props.navigation.navigate('CreationDetail', {'rowID':rowID});
    }

    _onRefresh() {
        if (this.state.isRefreshing || !this._hasMore()){
            return
        }

        this._fetchData(0);
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>列表页面</Text>
                </View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow.bind(this)}
                    renderFooter={this._renderFooter.bind(this)}
                    enableEmptySections={true}
                    onEndReached={this._fetchMoreData.bind(this)}
                    onEndReachedThreshold={20} //预加载
                    automaticallyAdjustContentInsets={false}
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isRefreshing}
                            onRefresh={this._onRefresh.bind(this )}
                            tintColor='#ff6600'
                            title='拼命加载中...'
                        />
                    }
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
    },
    item: {
        width: width,
        marginBottom: 10,
        backgroundColor: '#fff',
    },
    thumb: {
        width: width,
        height: width * 0.56,
        resizeMode: 'cover'
    },
    title: {
        padding: 10,
        fontSize: 18,
        color: '#333'
    },
    itemFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#eee'
    },
    handleBox: {
        padding: 10,
        flexDirection: 'row',
        width: width /2 -0.5,
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    play: {
        position: 'absolute',
        bottom: 14,
        right: 14,
        width: 46,
        height: 46,
        paddingTop: 9,
        paddingLeft: 18,
        backgroundColor: 'transparent',
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 23,
        color: '#3d7b66'
    },
    handleText: {
        paddingLeft: 12,
        fontSize: 18,
        color: '#333'
    },
    up: {
        fontSize: 22,
        color: '#ee735c'
    },
    down : {
        fontSize: 22,
        color: '#333'
    },
    commentIcon: {
        fontSize: 22,
        color: '#333'
    },
    loadingMore: {
        marginVertical: 20,
    },
    loadingText: {
        color: '#777',
        textAlign: 'center'
    }

})

const CreationPage = StackNavigator({
    CreationIndex: {
        screen: VideoPage,
        navigationOptions: {
            // headerTitle: 'Home',
            headerBackTitle: null,
            // headerRight: <Button title="Info" color='#841584' onPress={()=>{}}/>,
            // headerTintColor: 'white',
            headerStyle: {
                // backgroundColor: 'red',
                height: 0
            }
        }
    },
    CreationDetail: {
        screen: detail,
        navigationOptions:{
            headerTitle: 'My',
            headerBackTitle: null,
        }
    },
},{
    mode: 'card'
},{
    headerMode: 'screen',
});

export default CreationPage;
