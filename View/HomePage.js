import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    ListView
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import MyPage from './MyPage';

let jsonData=require('./../Data/HomeListData.json');

class Home extends Component {
    constructor(props) {
        super(props);
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(jsonData.data),
        };
    }

    render(){
        return(
            <ListView
              style={{backgroundColor: 'white'}}
              dataSource={this.state.dataSource}
              renderRow={(rowData, sectionID, rowID)=>this.renderCell(rowData, sectionID, rowID)}
              renderSeparator={()=>this.renderCellSeparator()}
            />
            // const { navigate } = this.props.navigation;
            // <View style={{flex: 1, backgroundColor: 'yellow', justifyContent: 'center', alignItems: 'center'}}>
            //     <TouchableOpacity onPress={()=>navigate('My', { message: 'hello world!' })}>
            //         <Text>click me!</Text>
            //     </TouchableOpacity>
            // </View>

        );
    }

    renderCell(rowData, sectionID, rowID){
      const { navigate } = this.props.navigation;
      return(
        <TouchableOpacity onPress={()=>navigate(rowData, { rowID: rowID })}>
          <View style={{flexDirection: 'row', height: 64, justifyContent: 'flex-start', alignItems: 'center'}}>
            <Text style={{marginLeft: 8, fontSize: 16, color: 'green'} }>{rowData}</Text>
          </View>
        </TouchableOpacity>
      );
    }

    renderCellSeparator() {
      return(
        <View style={{height: 0.5, backgroundColor: 'gray'}}/>
      );
    }
}


/*
  title: 标题，如果设置了这个导航栏和标签栏的title就会变成一样的，所以不推荐使用这个方法。
  header：可以设置一些导航的属性，当然如果想隐藏顶部导航条只要将这个属性设置为null就可以了。
  headerTitle：设置导航栏标题，推荐用这个方法。
  headerBackTitle：设置跳转页面左侧返回箭头后面的文字，默认是上一个页面的标题。可以自定义，也可以设置为null
  headerTruncatedBackTitle：设置当上个页面标题不符合返回箭头后的文字时，默认改成"返回"。（上个页面的标题过长，导致显示不下，所以改成了短一些的。）
  headerRight：设置导航条右侧。可以是按钮或者其他。
  headerLeft：设置导航条左侧。可以是按钮或者其他。
  headerStyle：设置导航条的样式。背景色，款高等。
  headerTitleStyle：设置导航条文字样式。安卓上如果要设置文字居中，只要添加alignSelf:'center'就可以了
  headerBackTitleStyle：设置导航条返回文字样式。
  headerTintColor：设置导航条颜色。总感觉和上面重叠了。
  headerPressColorAndroid：安卓独有的设置颜色纹理，需要安卓版本大于5.0
  gesturesEnabled：是否支持滑动返回收拾，iOS默认支持，安卓默认关闭

*/
const HomePage = StackNavigator({
    Home: {
        screen: Home,
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
    My: {
        screen: MyPage,
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

export default HomePage;
