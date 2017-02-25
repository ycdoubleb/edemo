/**
 * author wskeee
 * time 2017-02-23
 */
import React,{Component} from 'react';
import {Text,View,StyleSheet,TouchableOpacity,ListView,PixelRatio} from 'react-native';

import Dimensions from 'Dimensions';
//数字显示
class WatchFace extends Component{
    static propTypes = {
        sectionTime:React.PropTypes.string.isRequired,
        totalTime:React.PropTypes.string.isRequired,
    }

    render(){
        return (
            <View style={styles.watchFaceContainer}>
                <Text style={styles.sectionTime}>{this.props.sectionTime}</Text>
                <Text style={styles.totalTime}>{this.props.totalTime}</Text>
            </View>
        );
    }
}

//按钮控制
class WatchControl extends Component{
    static propTypes = {
        startWatch:React.PropTypes.func.isRequired,
        stopWatch:React.PropTypes.func.isRequired,
        addRecord:React.PropTypes.func.isRequired,
        clearWatch:React.PropTypes.func.isRequired,
    }

    constructor(props) {
        super(props);
        this.state = {
            watching:false,             //是否在计时
            leftBtnText:'计次',
            leftBtnUnderlayColor:'#fff', 
            rightBtnText:'开始',
            rightBtnColor:'#60B644',
        }
    }

    leftBtnPress(){
        if(this.state.watching){
            this.addRecord();
        }else{
            this.reset();
        }
    }

    rightBtnPress(){
        if(this.state.watching){
            this.pause();
            
        }else{
            this.resume();
        }
    }

    /**
     * 暂停计时
     */
    pause(){
        this.props.stopWatch();
        this.setState({
            watching:false,            //是否在计时
            leftBtnText:'复位',
            leftBtnUnderlayColor:'#eee',
            rightBtnText:'继续',
            rightBtnColor:'#60B644',
            
        })     
    }
    /**
     * 开始或者恢复计时
     */
    resume(){
        this.props.startWatch();
        this.setState({
            watching:true,            //是否在计时
            leftBtnText:'计次',
            leftBtnUnderlayColor:'#eee',
            rightBtnText:'停止',
            rightBtnColor:'#ff0044',
        }) 
    }

    /**
     * 添加计时记录
     */
    addRecord(){
        this.props.addRecord();
    }

    /**
     * 重置
     */
    reset(){
        this.props.clearWatch();
        this.setState({
            watching:false,            //是否在计时
            leftBtnText:'计次',
            leftBtnUnderlayColor:'#fff',
            rightBtnText:'开始',
            rightBtnColor:'#ff0044',
            
        });
    }   

    render(){
        return (
            <View style={styles.watchControlContainer}>
                <View style={styles.watchControlLeftContainer}>
                    <TouchableOpacity style={styles.watchControlBtn} underlayColor={this.state.leftBtnUnderlayColor} onPress={()=>this.leftBtnPress()}>
                        <Text style={styles.watchControlBtnText}>{this.state.leftBtnText}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.watchControlRightContainer}>
                    <TouchableOpacity style={styles.watchControlBtn} underlayColor='#eee' onPress={()=>this.rightBtnPress()}>
                        <Text style={[styles.watchControlBtnText,{color:this.state.rightBtnColor}]}>{this.state.rightBtnText}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

//历史记录
class WatchRecord extends Component{
    static propTypes={
        records:React.PropTypes.array.isRequired,
    }

    render(){
        let ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1 !== r2});
        let _dataSource = ds.cloneWithRows(this.props.records);
        return (
            <ListView style={styles.recordList}
                dataSource = {_dataSource}
                renderRow = {(rowData)=>
                    <View style={styles.recordListItem}>
                        <Text style={styles.recordListItemTitle}>{rowData.title}</Text>
                        <View style={styles.recordListItemTimeContainer}>
                            <Text style={styles.recordListItemTime}>{rowData.time}</Text>
                        </View>
                    </View>
                }/>
        );
    }
}

export default class Day1 extends Component{
    constructor(props){
        super(props);
        this.state = {
            watching: true,
            isReset: true,
            intialTime: 0,
            currentTime: 0,
            recordTime: 0,          //最后记录时间
            accumulationTime: 0,    //累加时间
            totalTime: "00:00.00",
            sectionTime: "00:00.00",
            recordCounter: 0,
            records:[
                {title:"",time:""},
                {title:"",time:""},
                {title:"",time:""},
                {title:"",time:""},
                {title:"",time:""},
                {title:"",time:""}
            ]
        };
    }

    componentWillUnmount(){
        this.stopWatch();
        this.clearWatch();
    }

    componentDidMount(){

    }

    //============================================================================
    //
    // act 
    //
    //============================================================================
    startWatch(){
        if(this.state.isReset){
            this.setState({
                watching: true,
                isReset: false,
                accumulationTime: 0,
                intialTime: (new Date()).getTime(),
            });
        }else{
            this.setState({
                watching: true,
                intialTime: (new Date()).getTime(),
            });
        }
        let minute,second,ms,accumulationTime,minute2,second2,ms2,recordTime,currentTime;
        let intervalID = setInterval(
            ()=>{
                currentTime = (new Date()).getTime();
                //计算总累加时间
                accumulationTime = this.state.accumulationTime + currentTime - this.state.intialTime;
                minute = Math.floor(accumulationTime / (60 * 1000));
                second = Math.floor((accumulationTime - minute * (60 * 1000))/1000);
                ms = Math.floor(accumulationTime % 1000);

                recordTime = accumulationTime - this.state.recordTime;
                minute2 = Math.floor(recordTime / (60 * 1000));
                second2 = Math.floor((recordTime - minute * (60 * 1000))/1000);
                ms2 = Math.floor(recordTime % 1000);
                
                this.setState({
                    currentTime: currentTime,
                    sectionTime: this._zero(minute2)+":"+this._zero(second2)+"."+ms,
                    totalTime: this._zero(minute)+":"+this._zero(second)+"."+ms,
                });

                //暂停计时
                if(!this.state.watching){
                    this.setState({
                        accumulationTime:accumulationTime,
                    });
                    clearInterval(intervalID);
                }
            },10);
        
    }

    stopWatch(){
        this.setState({
            watching: false,
        });
    }

    addRecord(){
        if(this.state.isReset){
            this.startWatch();
        }else{
            let {recordCounter,records} = this.state;
            recordCounter ++;
            records.pop();
            records.unshift({
                title:"计次 "+recordCounter,
                time:this.state.sectionTime,
            });
            this.setState({
                recordCounter: recordCounter,
                recordTime: this.state.accumulationTime + this.state.currentTime - this.state.intialTime,
                records:records,
            });
        }
    }

    clearWatch(){
        this.setState ({
            watching: true,
            isReset: true,
            intialTime: 0,
            currentTime: 0,
            recordTime: 0,          //最后记录时间
            accumulationTime: 0,    //累加时间
            totalTime: "00:00.00",
            sectionTime: "00:00.00",
            recordCounter: 0,
            records:[
                {title:"",time:""},
                {title:"",time:""},
                {title:"",time:""},
                {title:"",time:""},
                {title:"",time:""},
                {title:"",time:""},
            ]
        });
    }

    render(){
        return (
            <View style={styles.mainContainer}>
                <WatchFace sectionTime={this.state.sectionTime} totalTime={this.state.totalTime}/>
                <WatchControl startWatch={()=>this.startWatch()} stopWatch={()=>this.stopWatch()} addRecord={()=>this.addRecord()} clearWatch={()=>this.clearWatch()}/>
                <WatchRecord records={this.state.records}/>
            </View>
        );
    }

    //============================================================================
    //
    // utils 
    //
    //============================================================================
    _zero(value){
        return value > 9 ? value +"" : "0"+value;
    }
}
const styles = StyleSheet.create({
    mainContainer:{
        alignItems: "center",
        backgroundColor: "#f3f3f3",
        marginTop: 60,
    },
    //==============================================================
    // WatchFace
    //==============================================================
    watchFaceContainer:{
        width: Dimensions.get('window').width,
        paddingTop: 50, paddingLeft: 30, paddingRight:30, paddingBottom:40,
        backgroundColor: "#fff",
        borderBottomWidth: 1, borderBottomColor:"#ddd",
        height: 170,
    },
    sectionTime:{
        fontSize:20,
        fontWeight:'100',
        paddingRight:30,
        color:'#555',
        position:'absolute',
        right:10,
        top:30,
    },
    totalTime:{
        fontSize:Dimensions.get('window').width === 375 ? 70 : 60,
        fontWeight:'100',
        color:'#222',
        paddingLeft:20,
    },
    //==============================================================
    // WatchControl
    //==============================================================
    watchControlContainer:{
        width:Dimensions.get('window').width,
        height:100,
        flexDirection:'row',
        backgroundColor:"#f3f3f3",
        paddingTop:30, paddingLeft:60, paddingRight:60, paddingBottom:30
    },
    watchControlLeftContainer:{
        flex:1,
        alignItems:'flex-start',
    },
    watchControlRightContainer:{
        flex:1,
        alignItems:'flex-end',
    },
    watchControlBtn:{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#fff',
        justifyContent:'center',
        alignItems:'center',
    },
    watchControlBtnText:{
        fontSize:14,
        backgroundColor:'transparent',
        color:'#555',
    },
    //==============================================================
    // WatchRecord
    //==============================================================
    recordList:{
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height - 300,
        paddingLeft: 15,
    },
    recordListItem:{
        height: 40,
        borderBottomWidth:1/PixelRatio.get(),
        borderBottomColor:'#bbb',
        paddingTop: 5, paddingLeft: 10,paddingRight: 10,paddingBottom: 5,
        flexDirection: 'row',
        alignItems:'center',
    },
    recordListItemTitle:{
        flex:1,
        textAlign:'left',
        paddingLeft: 20,
        color:'#777',
        backgroundColor:'transparent',
    },
    recordListItemTimeContainer:{
        alignItems:'center',
    },
    recordListItemTime:{
        flex: 1,
        textAlign: 'right',
        paddingRight: 20,
        color:"#222",
    },
});