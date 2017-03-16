import React, {Component} from 'react';
import {View, Image, StyleSheet,Text} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import Util from '../utils';

export default class extends Component{
    //============================================================================
    //
    // vars
    //
    //============================================================================
    _lastTop;

    static stage = {
        avatarScale: 1,
    }

    constructor (props) {
        super(props)
    }
    
    //============================================================================
    //
    // act
    //
    //============================================================================
    render(){
        return (
            <View style={styles.rootContainer}>
                <View style={styles.userContainer}>
                    <Image style={styles.banner} source={require('../../assets/imgs/day2.png')}/>
                    <View style={[styles.avatarContainer]}>
                        <Image style={styles.avatar}/>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    rootContainer:{
        width: Util.size.width,
    },
    //==============================================================
    // 用户面板
    //==============================================================
    userContainer:{

    },
    banner:{
        width: Util.size.width,
    },
    avatarContainer:{

    },
    avatar:{

    },
    //==============================================================
    // 内容
    //==============================================================
});