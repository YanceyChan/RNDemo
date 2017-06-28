import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    ListView,
    TouchableHighlight,
    Dimensions,
} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

let width = Dimensions.get('window').width

export default class VideoPage extends Component {
    constructor(props) {
        super(props);
        let ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.state = {
            dataSource: ds.cloneWithRows(
                [
                    {
                        "_id":"450000199901131556","thumb":"http://dummyimage.com/1280x720/d29080","title":"测试内容kemu","video":"http://14.29.117.23/vedu.tc.qq.com/l1413rbzgwo.p702.1.mp4?sdtfrom=v1101&guid=1eb00f15da93e4b3957f0adc10f865f9&vkey=F11980E1506D412734B82BA888C423AFF7F3F9D60CD40B7634CE19AB87E951363A577BD157DF7A86083AAB707D428C70A3BEFC9B57ED26E91DA0CB1FCA8E0A3C20F962026AD7FB31688C7B8365E5D8394B7D1A84F9C61295"
                    }
                    ,
                    {
                        "_id":"410000199101132334","thumb":"http://dummyimage.com/1280x720/b1360d","title":"测试内容kemu","video":"http://14.29.117.23/vedu.tc.qq.com/l1413rbzgwo.p702.1.mp4?sdtfrom=v1101&guid=1eb00f15da93e4b3957f0adc10f865f9&vkey=F11980E1506D412734B82BA888C423AFF7F3F9D60CD40B7634CE19AB87E951363A577BD157DF7A86083AAB707D428C70A3BEFC9B57ED26E91DA0CB1FCA8E0A3C20F962026AD7FB31688C7B8365E5D8394B7D1A84F9C61295"
                    }
                    ,
                    {
                        "_id":"810000197404171950","thumb":"http://dummyimage.com/1280x720/473b28","title":"测试内容kemu","video":"http://14.29.117.23/vedu.tc.qq.com/l1413rbzgwo.p702.1.mp4?sdtfrom=v1101&guid=1eb00f15da93e4b3957f0adc10f865f9&vkey=F11980E1506D412734B82BA888C423AFF7F3F9D60CD40B7634CE19AB87E951363A577BD157DF7A86083AAB707D428C70A3BEFC9B57ED26E91DA0CB1FCA8E0A3C20F962026AD7FB31688C7B8365E5D8394B7D1A84F9C61295"
                    }
                    ,
                    {
                        "_id":"540000197611131542","thumb":"http://dummyimage.com/1280x720/e8cae6","title":"测试内容kemu","video":"http://14.29.117.23/vedu.tc.qq.com/l1413rbzgwo.p702.1.mp4?sdtfrom=v1101&guid=1eb00f15da93e4b3957f0adc10f865f9&vkey=F11980E1506D412734B82BA888C423AFF7F3F9D60CD40B7634CE19AB87E951363A577BD157DF7A86083AAB707D428C70A3BEFC9B57ED26E91DA0CB1FCA8E0A3C20F962026AD7FB31688C7B8365E5D8394B7D1A84F9C61295"
                    }
                    ,
                    {
                        "_id":"710000197607113757","thumb":"http://dummyimage.com/1280x720/fd1da5","title":"测试内容kemu","video":"http://14.29.117.23/vedu.tc.qq.com/l1413rbzgwo.p702.1.mp4?sdtfrom=v1101&guid=1eb00f15da93e4b3957f0adc10f865f9&vkey=F11980E1506D412734B82BA888C423AFF7F3F9D60CD40B7634CE19AB87E951363A577BD157DF7A86083AAB707D428C70A3BEFC9B57ED26E91DA0CB1FCA8E0A3C20F962026AD7FB31688C7B8365E5D8394B7D1A84F9C61295"
                    }
                ]
            ),
        };
    }

    _renderRow(rowData){
        return <TouchableHighlight>
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
                                    name='ios-heart-outline'
                                    size={28}
                                    style={styles.up}
                                />
                                <Text style={styles.handleText}>喜欢</Text>
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
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>列表页面</Text>
                </View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData)=>this._renderRow(rowData)}
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
        color: '#333'
    },
    commentIcon: {
        fontSize: 22,
        color: '#333'
    }

})
