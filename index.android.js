/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import MainView from './src/wskeee/edemo/views/MainView';

export default class EDome extends Component {
  /**
   * 配置
   */
  configureScene(){
    return Navigator.SceneConfigs.PushFromRight;
  };
  //导航按钮行为
  routeMapper = {
    LeftButton:(route,navigator,index,navState)=>{
      if(index>0){
        return (
          <TouchableOpacity underlayColor="transparent" onPress={()=>{if(index>0)navigator.pop()}}>
              <Text style={styles.navBackBtn}><Icon size={18} name="ios-arrow-back"/>Back</Text>
          </TouchableOpacity>
        );
      }else{
        return null;
      }
    },
    RightButton:(route,navigator,index,navState)=>{
      return null;
    },
    Title:(route,navigator,index,navState)=>{
      return(
        <View style={styles.navTitleContainer}>
          <Text style={styles.navTitle}>{route.title}</Text>
        </View>
      );
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{
          title:'30 day of RN',
          index:0,
          display:true, 
          component:MainView,
        }}
        configureScene={this.configureScene}
        renderScene={(route,navigator)=>{
            return <route.component navigator={navigator} {...route} />
          }
        }
        navigationBar={
          <Navigator.NavigationBar
            routeMapper = {this.routeMapper}
            style = {styles.navBar}
          />
        }
      />
    );
  }
}
//============================================================================
//
// 样式
//
//============================================================================
const styles = StyleSheet.create({
  navBar:{
    borderBottomWidth:1,
    borderBottomColor:'#ccc',
  },
  navBackBtn: {
    paddingTop: 10,
    paddingLeft: 10,
    fontSize: 18,
    color: "#555",
  },
  navTitleContainer:{
    flex:1,
    alignItems:'center',
  },
  navTitle:{
    fontWeight:"500",
    paddingTop:10,
    fontSize:18,
    textAlign:'center',
  }
});

AppRegistry.registerComponent('EDome', () => EDome);
