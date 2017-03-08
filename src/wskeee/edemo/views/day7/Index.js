import React, {Component} from 'react';
import {View, StyleSheet, Image,PanResponder } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Util from '../utils';
import MoveableCircle from './MoveableCircle';

const {width,height} = Util.size;

export default class extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <View>
                <Image source={require('../../assets/imgs/agrass.png')} style = {styles.bg} />
                <View style={styles.ballContainer}>
                    <MoveableCircle stageWidth={width} stageHeight={height} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bg:{
        position: 'absolute',
        width: width,
        height: height,
    },
    ballContainer:{
        width: width,
        height: height,
    }
});