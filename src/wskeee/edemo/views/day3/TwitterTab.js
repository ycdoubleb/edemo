import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';
import Icon from 'react-native-vector-icons/Ionicons';

import FacebookTabBar from './FacebookTabBar';
import TwitterPost from './TwitterPost';
import Util from '../utils';

export default class extends Component{
    state ={
        tabName:Array,
    }

    constructor(props){
        super(props);
        this.state = {
            tabNames: ['首页','通知','邮件','个人']
        }
    }

    render(){
        return (
            <View style={styles.mainContainer}>
                <View style={styles.headContainer}>
                    <View style={styles.headNavLeft}>
                        <Icon name='ios-person-add' size={27} style={{color:'#1b95e0',paddingLeft: 10}} />
                    </View>
                    <View style={styles.headNavMid}>
                        <Icon name='logo-twitter' size={27} style={{color:'#1b95e0'}}/>
                    </View>
                    <View style={styles.headNavRight}>
                        <Icon name='ios-search' size={27} style={{color:'#1b95e0',width:35}}/>
                        <Icon name='ios-create-outline' size={27} style={{color:'#1b95e0',paddingRight:10}}/>
                    </View>
                </View>
                
                <ScrollableTabView 
                    style ={{borderWidth: 1,}}
                    tabBarPosition = 'bottom'
                    renderTabBar = {() => <FacebookTabBar tabNames={this.state.tabNames} />}
                >
                    <TwitterPost tabLabel="ios-home" />
                    <TwitterPost tabLabel="ios-notifications" />
                    <TwitterPost tabLabel="ios-mail" />
                    <TwitterPost tabLabel="ios-person" />
                </ScrollableTabView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    mainContainer:{
        width: Util.size.width,
        height: Util.size.height,
    },
    //==============================================================
    // head
    //==============================================================
    headContainer:{
        borderWidth: Util.pixel,
        paddingTop: 30,
        paddingBottom: 10,
        flexDirection: 'row',
        width: Util.size.width,
    },
    headNavLeft:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 10,
    },
    headNavMid:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headNavRight:{
        flex:1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row',
        paddingRight: 10,
    },
});