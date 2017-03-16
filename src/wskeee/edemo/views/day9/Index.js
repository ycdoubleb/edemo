import React,{Component} from 'react';
import {View} from 'react-native';

import UserPage from './UserPage';

export default class extends Component{
    render(){
        return (
            <View>
                <UserPage/>
            </View>
        );
    }
}