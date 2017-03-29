import React,{Component} from 'react';
import {View,Text,Image,StyleSheet,TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import Util from '../utils';

export default class extends Component{
    //============================================================================
    //
    // vars
    //
    //============================================================================
    static propTypes = {
        source: React.PropTypes.object.isRequired,
    }

    constructor(props) {
        super(props);
        this.state = {
           selected: false,
        }
    }
    

    //============================================================================
    //
    // private
    //
    //============================================================================
    /**
     * 设置选中
     * @param {Boolean} selected 
     */
    _setSelected(selected){
        this.setState({
            selected: selected,
        });
    }
    //============================================================================
    //
    // public
    //
    //============================================================================
    render(){
        return (
            <TouchableOpacity onPress={() => {this._setSelected(!this.state.selected)}}>
                <Image style={styles.image} source={this.props.source} />
                {this.state.selected ? <Icon style={styles.icon} name='md-checkmark-circle' size={23} color='#00ff00' /> : <View/>}
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    image:{
        width: 113,
        height: 113,
    },
    icon:{
        position: 'absolute',
        top: 5,
        right: 5,
    },
});