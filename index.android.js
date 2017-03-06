/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Navigator,
  TouchableOpacity,
  BackAndroid,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import MainView from './src/wskeee/edemo/views/MainView';

class NavigationBar extends Navigator.NavigationBar{
  constructor (props) {
    super(props)
  }

  render(){
    var routes = this.props.navState.routeStack;
    if(routes.length){
      var route = routes[routes.length-1];
      if(route.display === false){
        return null;
      }
    }
    return super.render();
  }
}

export default class EDome extends Component {
  componentDidMount() {
    if(Platform.OS === 'ios'){
      StatusBar.setBarStyle(1);
    }else{
      StatusBar.setBackgroundColor("rgba(0,0,0,0)"); 
      StatusBar.setHidden(false);
      StatusBar.setTranslucent(true);
      BackAndroid.addEventListener("hardwareBackPress",this.onBack);
    }
  }

  componentWillUnmount(){
    if(Platform.OS === 'android'){
      BackAndroid.removeEventListener("hardwareBackPress",this.onBack);
    }
  }

  onBack = ()=>{
    let nav = this.refs.nav;
    const routes = nav.getCurrentRoutes();
    if(routes.length > 1){
      nav.pop();
      return true;
    }
    return false;
  };
  
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
          ref='nav'
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
            <NavigationBar
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
    paddingTop: 25,
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
    paddingTop:25,
    fontSize:18,
    textAlign:'center',
  }
});

AppRegistry.registerComponent('EDome', () => EDome);
