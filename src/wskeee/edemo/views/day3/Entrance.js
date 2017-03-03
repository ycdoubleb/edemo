/**
 * author wskeee
 * time 2017-03-02
 */
import React,{Component} from 'react';
import {Animated,Easing,StyleSheet} from 'react-native';

import Dimension from 'Dimensions';
import Icon from 'react-native-vector-icons/Ionicons';

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

export default class Entrance extends Component{
    //============================================================================
    //
    // vars
    //
    //============================================================================
    state = {
        hided: Function,
        transformAnima: Animated,
        opacityAnima: Animated,
    }

    constructor (props) {
        super(props);
        this.state = {
            transformAnima: new Animated.Value(1),
            opacityAnima: new Animated.Value(1),
        }
    }

    componentDidMount () {
        Animated.timing(this.state.transformAnima,{
            toValue: 50,
            duration: 1200,
            delay: 2000,
            easing: Easing.elastic(2),
        }).start();
        Animated.timing(this.state.opacityAnima,{
            toValue: 0,
            duration: 800,
            delay: 2000,
            easing: Easing.elastic(1),
        }).start();
    }
    
    
    render(){
        return (
            <Animated.View style={[styles.container,{opacity:this.state.opacityAnima}]}>
                <AnimatedIcon size={60} name="logo-twitter" style={[styles.icon,{transform:[{scale:this.state.transformAnima}]}]}/>
            </Animated.View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        top: 0,
        left: 0,
        width: Dimension.get('window').width,
        height: Dimension.get('window').height,
        backgroundColor: '#1b95e0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon:{
        color: '#fff',
    },
});