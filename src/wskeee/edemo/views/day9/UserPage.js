import React, {Component} from 'react';
import {View, Image, StyleSheet,Text,TouchableHighlight,PanResponder} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import ScrollableTabView ,{Scroll} from 'react-native-scrollable-tab-view';

import Util from '../utils';

export default class extends Component{
    //============================================================================
    //
    // vars
    //
    //============================================================================
    _lastTop = 0;
    user = null;

    userStyle = {
        style:{
            top: 0,
        }
    }

    static state = {
        avatarScale: React.PropTypes.number,
    }

    constructor (props) {
        super(props);
        this.state = {
            avatarScale : 1,
        }
    }

    componentWillMount() {
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => {
                return gestureState.dy/gestureState.dx!=0;
            },
            onPanResponderMove: (evt,gesture) => {
                let top = this._lastTop + gesture.dy;
                let scale = 1 + top / 50;
                this.userStyle.style.top = top;
                this.reflashUser();
                this.setState({
                    avatarScale: scale,
                });
            },
            onPanResponderEnd: (evt,gesture) => {
                this._lastTop = this.userStyle.style.top;
            },
        });
    }
    
    
    //============================================================================
    //
    // act
    //
    //============================================================================
    reflashUser(){
        this.user && this.user.setNativeProps(this.userStyle);
    }

    render(){
        return (
            <View ref={(user) => this.user = user } style={styles.rootContainer} {...this._panResponder.panHandlers}>
                <View style={styles.userContainer}>
                    <Image style={styles.banner} source={require('../../assets/imgs/day2.png')}/>
                    <View style={[styles.avatarContainer,{transform:[{scale:this.state.avatarScale}]}]}>
                        <Image style={styles.avatar} source={require('../../assets/imgs/wskeee.jpg')}/>
                    </View>
                    <View style={styles.userControlContainer}>
                        <TouchableHighlight style={styles.controlIcon}>
                            <Icon name='ios-settings' color="#8999a5" size={20} />
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.controlFriend}>
                            <Icon name='ios-people' color="#8999a5" size={20} />
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.controlProfile}>
                            <Text style={styles.profileText}>编辑个人资料</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.userInfo}>
                        <Text style={styles.userName}>Wskeee</Text>
                        <Text style={styles.userE}>@Github</Text>
                        <View style={styles.subscibeContainer}>
                            <Text style={styles.following}><Text style={styles.fontEm}>183</Text> 正在关注</Text>
                            <Text style={styles.follower}><Text style={styles.fontEm}>830k</Text> 关注者</Text>
                        </View>
                    </View>
                </View>
                <ScrollableTabView style={styles.contentContainer}>
                    <View tabLabel="关注" style={{borderWidth: 1,}}>
                        <Image style={styles.contentImage} source={require('../../assets/imgs/day3.png')} />
                    </View>
                    <View tabLabel="媒体" />
                    <View tabLabel="喜欢" />
                </ScrollableTabView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    rootContainer:{
        width: Util.size.width,
        height: Util.size.height,
    },
    //==============================================================
    // 用户面板
    //==============================================================
    userContainer:{

    },
    banner:{
        width: Util.size.width,
        height: 120,
        resizeMode: 'cover',
    },
    avatarContainer:{
        position: 'absolute',
        top: 90,
        left: 10,
        borderWidth: 5,
        borderColor: '#fff',
        borderRadius: 5,

    },
    avatar:{
        width: 64,
        height: 64,
        resizeMode: 'cover',
    },
    //==============================================================
    // 内容
    //==============================================================
    //==============================================================
    // userControlContainer
    //==============================================================
    userControlContainer:{
        paddingTop:10,
        flexDirection: 'row',
        height: 30,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingRight: 5,
    },

    controlIcon:{
        width: 30,
    },

    controlFriend:{
        width: 40,
        height: 30,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },

    controlProfile:{
        marginLeft:5,
        width: 96,
        height: 30,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },

    profileText:{
        fontSize: 12,
    },

    //==============================================================
    // 用户信息
    //==============================================================
    userInfo:{
        marginLeft: 15,
        marginTop: 20,
        borderWidth: 1,
    },
    userName:{
        fontSize: 16,
        fontWeight: 'bold',
    },
    userE:{
        marginTop: 5,
        marginBottom: 5,
    },
    subscibeContainer:{
        flexDirection: 'row',
    },
    following:{
        color: '#ccc',
        marginRight: 20,
    },
    follower:{
        color: '#ccc',
    },
    fontEm:{
        color: '#000',
    },
    //==============================================================
    // 内容
    //==============================================================
    contentContainer:{
        width: Util.size.width,
    },
    contentImage:{
        width: Util.size.width,
        resizeMode: 'contain',
    }
});