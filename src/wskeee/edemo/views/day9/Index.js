import React, {Component} from 'react';
import {View, Image} from 'react-native';

import UserPage from './UserPage';

import ScrollableTabView from 'react-native-scrollable-tab-view';
import FacebookTabBar from '../day3/FacebookTabBar';

export default class extends Component {
    render() {
        return (
            <ScrollableTabView
                tabBarPosition='bottom'
                locked={true}
                renderTabBar={() => <FacebookTabBar tabNames={['首页', '通知', '邮件', '个人']}/>}>
                <UserPage tabLabel="ios-home" />
                <UserPage tabLabel="ios-notifications" />
                <UserPage tabLabel="ios-mail" />
                <UserPage tabLabel="ios-person" />
            </ScrollableTabView>
        );
    }
}