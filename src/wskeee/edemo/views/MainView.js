/**
 * Created by wskeee on 2017-02-22 .
 */
'use strict';
import React,{Component} from 'react';
import {Text,TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Day1 from './src/wskeee/edemo/views/MainView';

export default class extends Component{
    constructor(props) {
        super(props);
        this.state = {
            days:[
                {
                    key:0,
                    title:"A stopwatch",
                    component: Day1,
                    icon:"ios-stopwatch",
                    size:48,
                    color:'#ff856c'
                },
                {
                    key:1,
                    title:"A stopwatch1",
                    component: Day1,
                    icon:"ios-stopwatch",
                    size:48,
                    color:'#ff856c'
                },
                {
                    key:2,
                    title:"A stopwatch2",
                    component: Day1,
                    icon:"ios-stopwatch",
                    size:48,
                    color:'#ff856c'
                }]
        }
    }
    render(){
        const boxs = this.state.days.map((elem,index)=>{
            return (
                <TouchableHighlight>
                    <View>
                        <Text></Text>

                    </View>
                </TouchableHighlight>
            );
        })
        return (
            <Text>MainView</Text>
        );
    };
}