import React, {Component} from 'react';
import {View, Image, StyleSheet} from 'react-native';

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
    redner(){
        return (
            <View style={styles.rootContainer}>
                <Image style={styles.banner} source={require('../../assets/imgs/day2.png')}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    rootContainer:{
        
    },
    banner:{
        
    },
});