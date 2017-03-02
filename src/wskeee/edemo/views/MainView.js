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
                    component: Day1,
                    isFA: false,
                    icon: "logo-twitter", 
                    size: 50,
                    color: "#2aa2ef",
                    hideNav: true
                }, {
                    key: 3,
                    title: "cocoapods",
                    component: Day1,
                    isFA: true,
                    icon: "contao",
                    size: 50,
                    color: "#FF9A05",
                    hideNav: false
                }, {
                    key: 4,
                    title: "find my location",
                    component: Day1,
                    isFA: false,
                    icon: "md-pin",
                    size: 50,
                    color: "#00D204",
                    hideNav: false
                }, {
                    key: 5,
                    title: "Spotify",
                    component: Day1,
                    isFA: true,
                    icon: "spotify",
                    size: 50,
                    color: "#777",
                    hideNav: true
                }
            ]
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