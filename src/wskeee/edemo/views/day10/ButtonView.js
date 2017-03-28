import React,{Component} from 'react';
import {View,Text,Image,StyleSheet,TouchableWithoutFeedback,Animated,Easing,PixelRatio,TouchableHighlight} from 'react-native';

import Util from '../utils';

export default class extends Component{

    static state = {
        shift: React.PropTypes.number,
        showMenu: React.PropTypes.bool,
    }

    //============================================================================
    //
    // vars
    //
    //============================================================================


    constructor(props) {
        super(props);
        this.state = {
            shift: new Animated.Value(-120),
            showMenu: false,
        }
    }
    
    //============================================================================
    //
    // private
    //
    //============================================================================
    /**
     * 弹出菜单
     */
    _pushMenu(){
        Animated.timing(
            this.state.shift,
            {
                toValue: 70,
                delay: 500,
                duration: 200,
                easing: Easing.elastic(1),
            }
        ).start();
        this.setState({
            showMenu: true,
        });
    }

    /**
     * 移除菜单
     */
    _removeMenu(){
        Animated.timing(
            this.state.shift,
            {
                toValue: -120,
                duration: 100,
                easing: Easing.elastic(1),
            }
        ).start();
        setTimeout(() => {
            this.setState({
                showMenu: false,
            });
        },300);
    }
    //============================================================================
    //
    // public
    //
    //============================================================================

    render(){
        return (
            <View>
                <TouchableWithoutFeedback onPress={() => this._pushMenu()}>
                    <Image style={styles.contentImage} source={require('../../assets/imgs/tumblr.png')}/>
                </TouchableWithoutFeedback>
                {this.state.showMenu ? 
                    <Image style={styles.popImage} source={require('../../assets/imgs/tumblrblur.png')}>
                        <Animated.View style={[styles.leftMenu,{left:this.state.shift}]}>
                            <Image style={styles.menuButton} source = {require('../../assets/imgs/tumblr-audio.png')} />        
                            <Image style={styles.menuButton} source = {require('../../assets/imgs/tumblr-chat.png')} />        
                            <Image style={styles.menuButton} source = {require('../../assets/imgs/tumblr-link.png')} />        
                        </Animated.View>

                        <Animated.View style={[styles.rightMenu,{right:this.state.shift}]}>
                            <Image style={styles.menuButton} source = {require('../../assets/imgs/tumblr-photo.png')} />        
                            <Image style={styles.menuButton} source = {require('../../assets/imgs/tumblr-quote.png')} />        
                            <Image style={styles.menuButton} source = {require('../../assets/imgs/tumblr-text.png')} />  
                        </Animated.View>

                        <TouchableHighlight style={styles.dismssBtn} activeOpacity={0} underlayColor="rgba(0,0,0,0)" onPress={() => this._removeMenu()}>
                            <Text style={styles.dismssText}>Home Wskeee!</Text>
                        </TouchableHighlight>
                    </Image>
                : <View/>}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    contentImage:{
        width: Util.size.width,
        height: Util.size.height,
        resizeMode: 'contain',
    },
    popImage:{
        position: 'absolute',
        width: Util.size.width,
        height: Util.size.height,
        resizeMode: 'contain',
    },
    //==============================================================
    // Menu
    //==============================================================
    leftMenu:{
        position: 'absolute',
        justifyContent: 'space-around',
        height: Util.size.height,
        paddingTop: 100,
        paddingBottom: 100,
        
    },
    rightMenu:{
        position: 'absolute',
        justifyContent: 'space-around',
        height: Util.size.height,
        paddingTop: 100,
        paddingBottom: 100,
    },
    menuButton:{
        width: 100,
        height: 100,
    },
    dismssBtn:{
        position: 'absolute',
        width: Util.size.width,
        bottom: 50,
    },
    dismssText:{
        textAlign: 'center',
        color: 'rgba(255,255,255,0.2)',
    }
});