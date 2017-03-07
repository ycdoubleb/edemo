import React,{Component} from 'react';
import {View,Image,PanResponder,StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class extends Component{

    //============================================================================
    //
    // vars
    //
    //============================================================================
    BALL_SIZE = 120;

    _previousLeft = 0;
    _previousTop = 0;
    _maxLeft = 0;
    _maxTop = 0;
    _stageWidth = 0;
    _stageHeight = 0;
    circle = null;
    circleStyle = {};
    panResponder = null;

    static state = {
        color: React.PropTypes.string,
    }

    static propTypes = {
        stageWidth: React.PropTypes.number,
        stageHeight: React.PropTypes.number,
    }

    constructor (props) {
        super(props)
        this.state = {
            color: 'rgba(255,255,255,0.7)',
        }
    }

    componentWillMount(){
        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt,gesture) => true,
            onStartShouldSetPanResponderCapture: (evt,gesture) => true,
            onMoveShouldSetPanResponder: (evt,gesture) => true,
            onMoveShouldSetPanResponderCapture: (evt,gesture) => true,
            
            onPanResponderGrant: (evt,gesture) => this.onPanResponderGrant(evt,gesture),
            onPanResponderStart: (evt,gesture) => this.onPanResponderStart(evt,gesture),
            onPanResponderMove: (evt,gesture) => this.onPanResponderMove(evt,gesture),
            onPanResponderEnd: (evt,gesture) => this.onPanResponderEnd(evt,gesture),
            onPanResponderRelease: (evt,gesture) => this.onPanResponderRelease(evt,gesture),
            onPanResponderTerminationRequest: (evt,gesture) => this.onPanResponderTerminationRequest(evt,gesture),
            onPanResponderTerminate: (evt,gesture) => this.onPanResponderTerminate(evt,gesture),
            onPanResponderReject: (evt,gesture) => this.onPanResponderReject(evt,gesture),
        });
    }

    componentDidMount() {
        this._stageWidth = this.props.stageWidth;
        this._stageHeight = this.props.stageHeight;
        this._previousLeft = this._stageWidth - this.BALL_SIZE >> 1;
        this._previousTop = this._stageHeight - this.BALL_SIZE >> 1;
        this._maxLeft = this._stageWidth - this.BALL_SIZE / 2;
        this._maxTop = this._stageHeight - this.BALL_SIZE / 2;
        this.circleStyle = {style:{
            left: this._previousLeft,
            top: this._previousTop,
        }}
        this.updateBall();
    }
    

    onPanResponderGrant(evt,gesture){
        this.setState({
             color: 'rgba(255,255,255,1)',
        });
    }
    onPanResponderStart(evt,gesture){
        
    }
    onPanResponderMove(evt,gesture){
        let left = this.circleStyle.style.left;
        let top = this.circleStyle.style.top;
        const ballRadius = this.BALL_SIZE/2;
        left += gesture.dx;
        top += gesture.dy;
        if(left<ballRadius)
            left = ballRadius;
        else if(left>this._maxLeft){
            left = this._maxLeft;
        }

        if(top<ballRadius){
            top = ballRadius;
        }else if(top>this._maxTop)
            top = this._maxTop;
        
        this.circleStyle.style.left = left;
        this.circleStyle.style.top = top;

        this.updateBall();
    }
    onPanResponderStart(evt,gesture){

    }
    onPanResponderEnd(evt,gesture){

    }
    onPanResponderRelease(evt,gesture){
        this._previousLeft += gesture.dx;
        this._previousTop += gesture.dy;
    }
    onPanResponderTerminationRequest(evt,gesture){

    }
    onPanResponderTerminate(evt,gesture){
        this._previousLeft += gesture.dx;
        this._previousTop += gesture.dy;
    }
    onPanResponderReject(evt,gesture){

    }

    //============================================================================
    //
    // act
    //
    //============================================================================

    updateBall(){
        this.circle && this.circle.setNativeProps(this.circleStyle);
    }

    render(){
        return (
            <View ref={(circle)=>{this.circle = circle}} style={styles.ballContainer} {...this.panResponder.panHandlers}>
                <Icon name='ios-baseball' size={this.BALL_SIZE} color={this.state.color}/>
            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    ballContainer:{
        position: 'absolute',
    }
});