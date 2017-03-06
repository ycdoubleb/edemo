import React,{Component} from 'react';
import {View,Text,ScrollView,RefreshControl,Image} from 'react-native';

import Util from '../utils';

export default class extends Component{

    state = {
        isRefreshing : Boolean,
    }

    constructor(props) {
        super(props);
        this.state = {
            isRefreshing : false,
        }
    }

    _onRefresh(){
        this.setState({
            isRefreshing : true,
        });

        setTimeout(() => {
            this.setState({
                isRefreshing : false,
            });
        },1000);
    }
    

    render(){
        return (
            <ScrollView
                refreshControl = {
                    <RefreshControl 
                        refreshing = {this.state.isRefreshing}
                        onRefresh = {() => this._onRefresh()}
                    />
                }
            >
                <Image source={require('../../assets/imgs/day3.png')} style={{width:Util.size.width,height:Util.size.height - 110}}/>
            </ScrollView>
        );
    }

}