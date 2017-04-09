import React,{Component,PropTypes} from 'react';
import {View,StyleSheet} from 'react-native';

export default class Circle extends Component{
    //============================================================================
    //
    // props 
    //
    //============================================================================
    static propTypes = {
        color: PropTypes.string,
        fill: PropTypes.bool,
        x: PropTypes.number,
        y: PropTypes.number,
        r: PropTypes.number,
        inner: PropTypes.bool,
        outer: PropTypes.bool,
    }

    static defaultProps = {
        inner: true,
        outer: true,
    }

    //============================================================================
    //
    // public 
    //
    //============================================================================

    render(){
        let {color,normalColor,fill,x,y,r,inner,outer} = this.props;
        return (
            <View style={[
                styles.outer,
                {left: x - r,top: y - r, borderRadius: r},
                {borderColor: normalColor},    
                fill && {borderColor: color},
                !outer && {borderWidth: 0},]}>

                {inner && 
                    <View style={[
                        !outer && styles.inner,
                        {width: 2 * r /3 ,height: 2 * r /3, borderRadius: r /3},
                        fill && {borderColor: color}
                        ]} />
                }  
            </View>
        );
    }
}

const styles = StyleSheet.create({
    outer: {
        position: 'absolute',
        borderColor: '#8E91A8',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inner: {
        backgroundColor: '#8E91A8'
    },
});