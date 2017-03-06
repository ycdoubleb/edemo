import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';
import Icon from 'react-native-vector-icons/Ionicons';

import FacebookTabBar from './FacebookTabBar';
import TwitterPost from './TwitterPost';

export default class extends Component{

    render(){
        <View>
            <View>
                <Icon name='ios-person-add' size={23} />
            </View>
            <View>
                <Icon name='logo-twitter' size={27}/>
            </View>
            <View>
                <Icon name='ios-search' size={23}/>
                <Icon name='ios-create-outline' size={23}/>
            </View>

            <ScrollableTabView 
                renderTabBar = {<FacebookTabBar />}
            >
                <TwitterPost tabLabel="ios-home" />
                <TwitterPost tabLabel="ios-notifications" />
                <TwitterPost tabLabel="ios-mail" />
                <TwitterPost tabLabel="ios-person" />
            </ScrollableTabView>    
        </View>
    }
}