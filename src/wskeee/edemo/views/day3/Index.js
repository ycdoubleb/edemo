import React, {Component} from 'react';
import {View, Text, ViewPagerAndroid, StyleSheet, ScrollView} from 'react-native';

import ScrollableTabView, {DefaultTabBar, ScrollableTabBar} from 'react-native-scrollable-tab-view';
import Icon from 'react-native-vector-icons/Ionicons';

import Entrance from './Entrance';
import TwitterTab from './TwitterTab';

export default class extends Component {

    state = {
        isEnter:Boolean,
    }

    

    render() {
        let entrance = this.state.isEnter ? '' : <Entrance />;
        return (
            <View>
                <TwitterTab />
                {entrance}
            </View>
        );
    }
}