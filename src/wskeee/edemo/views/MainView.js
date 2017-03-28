/**
 * Created by wskeee on 2017-02-22 .
 */
'use strict';
import React, {Component} from 'react';
import {Text, View, TouchableHighlight,StyleSheet,PixelRatio,ScrollView,Image} from 'react-native';

import Dimensions from 'Dimensions';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFA from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';

import Day1 from './Day1';
import Day2 from './Day2';
import Day3 from './day3/Index';
import Day4 from './day4';
import Day5 from './day5';
import Day6 from './day5';
import Day7 from './day7/Index';
import Day8 from './day5';
import Day9 from './day9/Index';
import Day10 from './day10/Index';
import Day11 from './day5';
import Day12 from './day5';
import Day13 from './day5';
import Day14 from './day5';
import Day15 from './day5';
import Day16 from './day5';
import Day17 from './day5';
import Day18 from './day5';
import Day19 from './day5';
import Day20 from './day5';
import Day21 from './day5';
import Day22 from './day5';
import Day23 from './day5';
import Day24 from './day5';
import Day25 from './day5';
import Day26 from './day5';
import Day27 from './day5';
import Day28 from './day5';
import Day29 from './day5';
import Day30 from './day5';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days: [
                {
                    key: 0,
                    title: "A stopwatch",
                    component: Day1,
                    isFA: false,
                    icon: "ios-stopwatch",
                    size: 48,
                    color: '#ff856c'
                }, {
                    key: 1,
                    title: "A weather app",
                    component: Day2,
                    isFA: false,
                    icon: "ios-partly-sunny",
                    size: 60,
                    color: "#90bdc1",
                    hideNav: true
                }, {
                    key: 2,
                    title: "twitter",
                    component: Day3,
                    isFA: false,
                    icon: "logo-twitter", 
                    size: 50,
                    color: "#2aa2ef",
                    hideNav: true
                }, {
                    key: 3,
                    title: "cocoapods",
                    component: Day4,
                    isFA: true,
                    icon: "contao",
                    size: 50,
                    color: "#FF9A05",
                    hideNav: false
                }, {
                    key: 4,
                    title: "find my location",
                    component: Day5,
                    isFA: false,
                    icon: "md-pin",
                    size: 50,
                    color: "#00D204",
                    hideNav: false
                }, {
                    key: 5,
                    title: "Spotify",
                    component: Day6, 
                    isFA: true,
                    icon: "spotify",
                    size: 50,
                    color: "#777",
                    hideNav: true
                },{
                    key:6,
                    title:"Moveable Circle",
                    component: Day7,
                    isFA: false,
                    icon: "ios-baseball",
                    size:50,
                    color:"#5e2a06",
                    hideNav: true,
                },{
                    key:7,
                    title:"Swipe Left Menu",
                    component: Day8,
                    isFA: true,
                    icon: "google",
                    size:50,
                    color:"#4285f4",
                    hideNav: true,
                },{
                    key:8,
                    title:"Twitter Parallax View",
                    component: Day9,
                    isFA: true,
                    icon: "twitter-square",
                    size:50,
                    color:"#2aa2ef",
                    hideNav: true,
                },{
                    key:9,
                    title:"Tumblr Menu",
                    component: Day10,
                    isFA: false,
                    icon: "logo-tumblr",
                    size:50,
                    color:"#37465c",
                    hideNav: true,
                }
                ,{
                    key:10,
                    title:"OpenGL",
                    component: Day11,
                    isFA: false,
                    icon: "md-contrast",
                    size:50,
                    color:"#2F3600",
                    hideNav: false,
                },{
                    key:11,
                    title:"charts",
                    component: Day12,
                    isFA: false,
                    icon: "ios-stats",
                    size:50,
                    color:"#fd8f9d",
                    hideNav: false,
                },{
                    key:12,
                    title:"tweet",
                    component: Day13,
                    isFA: false,
                    icon: "md-chatboxes",
                    size:50,
                    color:"#83709d",
                    hideNav: true,
                },{
                    key:13,
                    title:"tinder",
                    component: Day14,
                    isFA: true,
                    icon: "fire",
                    size:50,
                    color:"#ff6b6b",
                    hideNav: true,
                },{
                    key:14,
                    title:"Time picker",
                    component: Day15,
                    isFA: false,
                    icon: "ios-calendar-outline",
                    size:50,
                    color:"#ec240e",
                    hideNav: false,
                },{
                    key:15,
                    title:"Gesture unlock",
                    component: Day16,
                    isFA: false,
                    icon: "ios-unlock",
                    size:50,
                    color:"#32A69B",
                    hideNav: true,
                },{
                    key:16,
                    title:"Fuzzy search",
                    component: Day17,
                    isFA: false,
                    icon: "md-search",
                    size:50,
                    color:"#69B32A",
                    hideNav: false,
                },{
                    key:17,
                    title:"Sortable",
                    component: Day18,
                    isFA: false,
                    icon: "md-move",
                    size:50,
                    color:"#68231A",
                    hideNav: true,
                },{
                    key:18,
                    title:"TouchID to unlock",
                    component: Day19,
                    isFA: false,
                    icon: "ios-log-in",
                    size:50,
                    color:"#fdbded",
                    hideNav: true,
                },{
                    key:19,
                    title:"Single page Reminder",
                    component: Day20,
                    isFA: false,
                    icon: "ios-list-outline",
                    size:50,
                    color:"#68d746",
                    hideNav: true,
                },{
                    key:20,
                    title:"Multi page Reminder",
                    component: Day21,
                    isFA: false,
                    icon: "ios-paper-outline",
                    size:50,
                    color:"#fe952b",
                    hideNav: true,
                },{
                    key:21,
                    title:"Google Now",
                    component: Day22,
                    isFA: false,
                    icon: "ios-mic-outline",
                    size:50,
                    color:"#4285f4",
                    hideNav: true,
                },{
                    key:22,
                    title:"Local WebView",
                    component: Day23,
                    isFA: true,
                    icon: "safari",
                    size:50,
                    color:"#23bfe7",
                    hideNav: false,
                },{
                    key:23,
                    title:"Youtube scrollable tab",
                    component: Day24,
                    isFA: false,
                    icon: "logo-youtube",
                    size:50,
                    color:"#e32524",
                    hideNav: true,
                },{
                    key:24,
                    title:"custome in-app browser",
                    component: Day25,
                    isFA: false,
                    icon: "ios-globe",
                    size:50,
                    color:"#00ab6b",
                    hideNav: true,
                },{
                    key:25,
                    title:"swipe and switch",
                    component: Day26,
                    isFA: false,
                    icon: "md-shuffle",
                    size:50,
                    color:"#893D54",
                    hideNav: true,
                },{
                    key:26,
                    title:"iMessage Gradient",
                    component: Day27,
                    isFA: false,
                    icon: "ios-chatbubbles",
                    size:50,
                    color:"#248ef5",
                    hideNav: false,
                },{
                    key:27,
                    title:"iMessage image picker",
                    component: Day28,
                    isFA: false,
                    icon: "md-images",
                    size:50,
                    color:"#f5248e",
                    hideNav: true,
                },{
                    key:28,
                    title:"3d touch",
                    component: Day29,
                    isFA: false,
                    icon: "ios-navigate",
                    size:50,
                    color:"#48f52e",
                    hideNav: false,
                },{
                    key:29,
                    title:"Push Notifications",
                    component: Day30,
                    isFA: false,
                    icon: "md-notifications",
                    size:50,
                    color:"#f27405",
                    hideNav: false,
                }]
        }
    }

    _onBtnPress(index) {
        this.props.navigator.push({
            title:this.state.days[index].title,
            index:index + 1,
            display:!this.state.days[index].hideNav,
            component:this.state.days[index].component, 
        }); 
    };
    render() {
        const boxs = this
            .state
            .days
            .map((elem, index) => {
                return (
                    <TouchableHighlight key={elem.key} style={[styles.touchBox,index%3 == 2 ? styles.touchBox2 : styles.touchBox1]} underlayColor="#eee" 
                        onPress={()=>this._onBtnPress(index)}>

                        <View style={styles.boxContainer}>
                            <Text style={styles.boxTitle}>Day {index + 1}</Text>
                            {!elem.isFA ? 
                                <Icon size={elem.size} name={elem.icon} color={elem.color} style={styles.boxIcon}></Icon> 
                                : <IconFA size={elem.size} name={elem.icon} color={elem.color} style={styles.boxIcon}></IconFA>}
                        </View>

                    </TouchableHighlight>
                );
            })
        return (
            <ScrollView style={styles.mainContainer}>
                <Swiper height={150} autoplay={true} showsButtons={false}>
                    <View style={styles.swiperView}>
                        <Image style={styles.swiperImage} source={require('./../assets/imgs/day1.png')}/>
                        <Text style={styles.swiperText}>Day 1: Timer</Text>
                    </View>
                    <View style={styles.swiperView}>
                        <Image style={styles.swiperImage} source={require('./../assets/imgs/day2.png')}/>
                        <Text style={styles.swiperText}>Day 2: Weather</Text>
                    </View>
                </Swiper>
                <View style={styles.touchBoxContainer}>
                    {boxs}
                </View>
            </ScrollView>
        );
    };
}
const pixel = 1 / PixelRatio.get();
const styles = StyleSheet.create({

    //============================================================================
    //
    // Swiper
    //
    //============================================================================
    //
    mainContainer:{
        paddingTop:55,
    },
    swiperView:{
        flex:1,
        height:150,
        justifyContent:'center',
        alignItems:'center',
    },
    swiperImage:{
        flex:1,
        width:Dimensions.get('window').width,
        height:80,
        alignSelf:'stretch',
        resizeMode:'cover',
    },
    swiperText:{
        position:'absolute',
        bottom:0,
        paddingTop:5,
        paddingBottom:5,
        backgroundColor:"rgba(255,255,255,0.5)",
        width:Dimensions.get('window').width,
        textAlign:'center',
        fontSize:12,
    },

    //============================================================================
    //
    // Boxs
    //
    //============================================================================
    //按钮容器样式
    touchBoxContainer:{
        flexDirection:"row",
        flexWrap:"wrap",
        width:Dimensions.get('window').width,
        borderTopWidth: pixel,
        borderTopColor:"#ccc",
        borderLeftWidth: pixel,
        borderLeftColor:"#ccc",
        borderRightWidth: pixel,
        borderRightColor:"#ccc",
    },

    

    //按钮样式
    touchBox:{
        width:Dimensions.get('window').width / 3 - 1,
        height:Dimensions.get('window').width / 3 - 1,
        backgroundColor:'#fff'
    },
    //非中间按钮样式
    touchBox1:{
        borderBottomWidth: pixel,
        borderBottomColor:"#ccc",
        borderRightWidth: pixel,
        borderRightColor:"#ccc",
    },
    touchBox2:{
        borderBottomWidth: pixel,
        borderBottomColor:"#ccc",
        borderLeftWidth: pixel,
        borderLeftColor:"#ccc",    
    },
    boxContainer:{
        justifyContent:'center',
        alignItems:'center',
        flex:1
    },
    boxIcon:{
        position:'relative',
        top:-10,
    },
    boxTitle:{
        position:'absolute',
        bottom:15,
        width:Dimensions.get('window').width/3,
        textAlign:'center'
    },
});