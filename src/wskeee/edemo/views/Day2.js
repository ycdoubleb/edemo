import React,{Component} from 'react';
import {View,Text,ScrollView,Image,TouchableHighlight,StyleSheet,PixelRatio} from 'react-native';
import Dimensions from 'Dimensions';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/Ionicons';


const weatherData = [{key:0,city:"\u798f\u5dde",night:!0,bg:require("./../assets/imgs/w2.png"),abs:"\u5927\u90e8\u6674\u6717",degree:15,today:{week:"\u661f\u671f\u516d",day:"\u4eca\u5929",high:16,low:14},hours:[{key:101,time:"\u73b0\u5728",icon:"ios-moon",degree:"15\xb0",color:"rgba(255,255,255,1)"},{key:102,time:"3\u65f6",icon:"ios-cloudy-night",degree:"15\xb0",color:"rgba(255,255,255,0.8)"},{key:103,time:"4\u65f6",icon:"ios-cloudy-night",degree:"16\xb0",color:"rgba(255,255,255,0.8)"},{key:104,time:"5\u65f6",icon:"ios-cloudy-night",degree:"16\xb0",color:"rgba(255,255,255,0.8)"},{key:105,time:"6\u65f6",icon:"ios-cloudy-night",degree:"16\xb0",color:"rgba(255,255,255,0.8)"},{key:106,time:"06:21",icon:"ios-sunny-outline",degree:"\u65e5\u51fa",color:"#fedf32"},{key:107,time:"7\u65f6",icon:"ios-partly-sunny",degree:"16\xb0",color:"rgba(255,255,255,0.9)"},{key:108,time:"8\u65f6",icon:"ios-partly-sunny",degree:"18\xb0",color:"rgba(255,255,255,0.9)"},{key:109,time:"9\u65f6",icon:"ios-sunny",degree:"19\xb0",color:"#fedf32"},{key:110,time:"10\u65f6",icon:"ios-sunny",degree:"122\xb0",color:"#fedf32"},{key:111,time:"11\u65f6",icon:"ios-sunny",degree:"23\xb0",color:"#fedf32"},{key:112,time:"13\u65f6",icon:"ios-sunny",degree:"22\xb0",color:"#fedf32"},{key:113,time:"13\u65f6",icon:"ios-sunny",degree:"22\xb0",color:"#fedf32"},{key:114,time:"14\u65f6",icon:"ios-partly-sunny",degree:"16\xb0",color:"rgba(255,255,255,0.9)"},{key:115,time:"15\u65f6",icon:"ios-partly-sunny",degree:"22\xb0",color:"rgba(255,255,255,0.9)"},{key:116,time:"16\u65f6",icon:"ios-partly-sunny",degree:"21\xb0",color:"rgba(255,255,255,0.9)"},{key:117,time:"17\u65f6",icon:"ios-partly-sunny",degree:"19\xb0",color:"rgba(255,255,255,0.9)"},{key:118,time:"18\u65f6",icon:"ios-partly-sunny",degree:"18\xb0",color:"rgba(255,255,255,0.9)"},{key:119,time:"18:06",icon:"ios-partly-sunny-outline",degree:"\u65e5\u843d",color:"rgba(255,255,255,0.9)"},{key:120,time:"19\u65f6",icon:"ios-cloudy-night",degree:"18\xb0",color:"rgba(255,255,255,0.8)"},{key:121,time:"20\u65f6",icon:"ios-cloudy-night",degree:"18\xb0",color:"rgba(255,255,255,0.8)"},{key:122,time:"21\u65f6",icon:"ios-cloudy-night",degree:"18\xb0",color:"rgba(255,255,255,0.8)"},{key:123,time:"22\u65f6",icon:"ios-cloudy-night",degree:"17\xb0",color:"rgba(255,255,255,0.8)"},{key:124,time:"23\u65f6",icon:"ios-cloudy",degree:"17\xb0",color:"rgba(255,255,255,0.8)"},{key:125,time:"0\u65f6",icon:"ios-cloudy",degree:"17\xb0",color:"rgba(255,255,255,0.8)"},{key:126,time:"1\u65f6",icon:"ios-cloudy",degree:"17\xb0",color:"rgba(255,255,255,0.8)"},{key:127,time:"2\u65f6",icon:"ios-cloudy",degree:"17\xb0",color:"rgba(255,255,255,0.8)"}],days:[{key:21,day:"\u661f\u671f\u4e00",icon:"ios-partly-sunny",high:21,low:16},{key:22,day:"\u661f\u671f\u4e8c",icon:"ios-rainy",high:22,low:14},{key:23,day:"\u661f\u671f\u4e09",icon:"ios-rainy",high:21,low:11},{key:24,day:"\u661f\u671f\u56db",icon:"ios-rainy",high:12,low:8},{key:25,day:"\u661f\u671f\u4e94",icon:"ios-rainy",high:9,low:7},{key:26,day:"\u661f\u671f\u516d",icon:"ios-partly-sunny",high:13,low:9},{key:27,day:"\u661f\u671f\u65e5",icon:"ios-rainy",high:17,low:13},{key:28,day:"\u661f\u671f\u4e00",icon:"ios-partly-sunny",high:18,low:14},{key:29,day:"\u661f\u671f\u4e8c",icon:"ios-partly-sunny",high:22,low:17}],info:"\u4eca\u5929\uff1a\u4eca\u5929\u5927\u90e8\u591a\u4e91\u3002\u73b0\u5728\u6c14\u6e29 15\xb0\uff1b\u6700\u9ad8\u6c14\u6e2923\xb0\u3002",rise:"06:21",down:"18:06",prop:"10%",humi:"94%",dir:"\u4e1c\u5317\u504f\u5317",speed:"3\u5343\u7c73\uff0f\u5c0f\u65f6",feel:"15\xb0",rain:"0.0 \u5398\u7c73",pres:"1,016 \u767e\u5e15",sight:"5.0 \u516c\u91cc",uv:"0"},{key:1,city:"\u5361\u5c14\u52a0\u91cc",night:!1,bg:require("./../assets/imgs/w3.png"),abs:"\u5927\u90e8\u6674\u6717",degree:15,today:{week:"\u661f\u671f\u516d",day:"\u4eca\u5929",high:16,low:14},hours:[{key:101,time:"\u73b0\u5728",icon:"ios-moon",degree:"15\xb0",color:"rgba(255,255,255,1)"},{key:102,time:"3\u65f6",icon:"ios-cloudy-night",degree:"15\xb0",color:"rgba(255,255,255,0.8)"},{key:103,time:"4\u65f6",icon:"ios-cloudy-night",degree:"16\xb0",color:"rgba(255,255,255,0.8)"},{key:104,time:"5\u65f6",icon:"ios-cloudy-night",degree:"16\xb0",color:"rgba(255,255,255,0.8)"},{key:105,time:"6\u65f6",icon:"ios-cloudy-night",degree:"16\xb0",color:"rgba(255,255,255,0.8)"},{key:106,time:"06:21",icon:"ios-sunny-outline",degree:"\u65e5\u51fa",color:"#fedf32"},{key:107,time:"7\u65f6",icon:"ios-partly-sunny",degree:"16\xb0",color:"rgba(255,255,255,0.9)"},{key:108,time:"8\u65f6",icon:"ios-partly-sunny",degree:"18\xb0",color:"rgba(255,255,255,0.9)"},{key:109,time:"9\u65f6",icon:"ios-sunny",degree:"19\xb0",color:"#fedf32"},{key:110,time:"10\u65f6",icon:"ios-sunny",degree:"122\xb0",color:"#fedf32"},{key:111,time:"11\u65f6",icon:"ios-sunny",degree:"23\xb0",color:"#fedf32"},{key:112,time:"13\u65f6",icon:"ios-sunny",degree:"22\xb0",color:"#fedf32"},{key:113,time:"13\u65f6",icon:"ios-sunny",degree:"22\xb0",color:"#fedf32"},{key:114,time:"14\u65f6",icon:"ios-partly-sunny",degree:"16\xb0",color:"rgba(255,255,255,0.9)"},{key:115,time:"15\u65f6",icon:"ios-partly-sunny",degree:"22\xb0",color:"rgba(255,255,255,0.9)"},{key:116,time:"16\u65f6",icon:"ios-partly-sunny",degree:"21\xb0",color:"rgba(255,255,255,0.9)"},{key:117,time:"17\u65f6",icon:"ios-partly-sunny",degree:"19\xb0",color:"rgba(255,255,255,0.9)"},{key:118,time:"18\u65f6",icon:"ios-partly-sunny",degree:"18\xb0",color:"rgba(255,255,255,0.9)"},{key:119,time:"18:06",icon:"ios-partly-sunny-outline",degree:"\u65e5\u843d",color:"rgba(255,255,255,0.9)"},{key:120,time:"19\u65f6",icon:"ios-cloudy-night",degree:"18\xb0",color:"rgba(255,255,255,0.8)"},{key:121,time:"20\u65f6",icon:"ios-cloudy-night",degree:"18\xb0",color:"rgba(255,255,255,0.8)"},{key:122,time:"21\u65f6",icon:"ios-cloudy-night",degree:"18\xb0",color:"rgba(255,255,255,0.8)"},{key:123,time:"22\u65f6",icon:"ios-cloudy-night",degree:"17\xb0",color:"rgba(255,255,255,0.8)"},{key:124,time:"23\u65f6",icon:"ios-cloudy",degree:"17\xb0",color:"rgba(255,255,255,0.8)"},{key:125,time:"0\u65f6",icon:"ios-cloudy",degree:"17\xb0",color:"rgba(255,255,255,0.8)"},{key:126,time:"1\u65f6",icon:"ios-cloudy",degree:"17\xb0",color:"rgba(255,255,255,0.8)"},{key:127,time:"2\u65f6",icon:"ios-cloudy",degree:"17\xb0",color:"rgba(255,255,255,0.8)"}],days:[{key:21,day:"\u661f\u671f\u4e00",icon:"ios-partly-sunny",high:21,low:16},{key:22,day:"\u661f\u671f\u4e8c",icon:"ios-rainy",high:22,low:14},{key:23,day:"\u661f\u671f\u4e09",icon:"ios-rainy",high:21,low:11},{key:24,day:"\u661f\u671f\u56db",icon:"ios-rainy",high:12,low:8},{key:25,day:"\u661f\u671f\u4e94",icon:"ios-rainy",high:9,low:7},{key:26,day:"\u661f\u671f\u516d",icon:"ios-partly-sunny",high:13,low:9},{key:27,day:"\u661f\u671f\u65e5",icon:"ios-rainy",high:17,low:13},{key:28,day:"\u661f\u671f\u4e00",icon:"ios-partly-sunny",high:18,low:14},{key:29,day:"\u661f\u671f\u4e8c",icon:"ios-partly-sunny",high:22,low:17}],info:"\u4eca\u5929\uff1a\u4eca\u5929\u5927\u90e8\u591a\u4e91\u3002\u73b0\u5728\u6c14\u6e29 15\xb0\uff1b\u6700\u9ad8\u6c14\u6e2923\xb0\u3002",rise:"06:21",down:"18:06",prop:"10%",humi:"94%",dir:"\u4e1c\u5317\u504f\u5317",speed:"3\u5343\u7c73\uff0f\u5c0f\u65f6",feel:"15\xb0",rain:"0.0 \u5398\u7c73",pres:"1,016 \u767e\u5e15",sight:"5.0 \u516c\u91cc",uv:"0"}];

class Weather extends Component{
    static propTypes = {
        onBackPress: React.PropTypes.func.isRequired,
    }
    constructor(props){
        super(props);
        this.state = {
            weather : weatherData,
        }
    }

    render(){
        const slides = this.state.weather.map((elem,index) => {

            const hoursView = elem.hours.map((hourElem,index) => {
                return (
                    <View key={hourElem.key} style={styles.hoursTimeContainer}>
                        <Text style={index == 0 ? styles.hoursTimeNow : styles.hoursTime}>{hourElem.time}</Text>
                        <Icon style={[styles.hoursTimeIcon,{color:hourElem.color}]} size={25} name={hourElem.icon}/>
                        <Text style={index == 0 ? styles.hoursTimeDegreeNow : styles.hoursTimeDegree}>{hourElem.degree}</Text>
                    </View>
                );
            });

            const daysView = elem.days.map((dayElem,index) => {
                return (
                    <View key={dayElem.key} style={styles.daysItemContainer}>
                        <View style={styles.daysNameContainer}>
                            <Text style={styles.daysName}>{dayElem.day}</Text>
                        </View>
                        <View style={styles.daysIconContainer}>
                            <Icon style={[styles.daysIcon]} size={25} name={dayElem.icon}/>
                        </View>
                        <View style={styles.daysTemperatureContainer}>
                            <Text style={elem.night ? styles.daysTemperatureLowNight : styles.daysTemperatureLow}>{dayElem.low}</Text>
                            <Text style={styles.daysTemperatureHight}>{dayElem.high}</Text>
                        </View>
                    </View>
                );
            });

            return (
                <View key={elem.key} style={styles.weatherPage}>
                    <Image source={elem.bg} />
                    <ScrollView style={styles.pageContainer} showsVerticalScrollIndicator={false}>
                        <View style={styles.headInfo}>
                            <Text style={styles.handCity}>{elem.city}</Text>
                            <Text style={styles.handAbs}>{elem.abs}</Text>
                            <View style={{flexDirection:'row'}}>
                                <Text style={styles.handDegree}>{elem.degree}</Text>
                                <Text style={styles.handCircle}>°</Text>
                            </View>
                        </View>
                        <View style={styles.todayContainer}>
                            <View style={styles.todayHead}>
                                <Text style={styles.todayWeek}>{elem.today.week}</Text>
                                <Text style={styles.todayDay}>{elem.today.day}</Text>
                            </View>
                            <View style={styles.todayTail}>
                                <Text style={elem.night ? styles.todayLowNigth : styles.todayLow}>{elem.today.low}</Text>
                                <Text style={styles.todayHigh}>{elem.today.high}</Text>
                            </View>
                        </View>
                        <View style={styles.hoursContainer}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                {hoursView}
                            </ScrollView>
                        </View>
                        
                        <View style={styles.daysContainer}>
                            {daysView}
                        </View>
                        <View style={styles.infoContainer}>
                            <Text style={styles.infoContent}>{elem.info}</Text>
                        </View>
                        <View style={styles.detailInfoContainer}>

                            <View style={styles.detailInfoItemContainer}>
                                <View style={styles.detailInfoItemLine}>
                                    <Text style={styles.detailInfoLeft}>日出：</Text>
                                    <Text style={styles.detailInfoRight}>{elem.rise}</Text>
                                </View>
                                <View style={styles.detailInfoItemLine}>
                                    <Text style={styles.detailInfoLeft}>日落：</Text>
                                    <Text style={styles.detailInfoRight}>{elem.down}</Text>
                                </View>
                            </View>
                            
                            <View style={styles.detailInfoItemContainer}>
                                <View style={styles.detailInfoItemLine}>
                                    <Text style={styles.detailInfoLeft}>降雨概率：</Text>
                                    <Text style={styles.detailInfoRight}>{elem.prop}</Text>
                                </View>
                                <View style={styles.detailInfoItemLine}>
                                    <Text style={styles.detailInfoLeft}>湿度：</Text>
                                    <Text style={styles.detailInfoRight}>{elem.humi}</Text>
                                </View>
                            </View>
                            
                            <View style={styles.detailInfoItemContainer}>
                                <View style={styles.detailInfoItemLine}>
                                    <Text style={styles.detailInfoLeft}>风度：</Text>
                                    <Text style={styles.detailInfoRight}><Text style={styles.detailInfoDir}>{elem.dir}</Text>{elem.speed}</Text>
                                </View>
                                <View style={styles.detailInfoItemLine}>
                                    <Text style={styles.detailInfoLeft}>体感温度：</Text>
                                    <Text style={styles.detailInfoRight}>{elem.feel}</Text>
                                </View>
                            </View>
                            

                            <View style={styles.detailInfoItemContainer}>
                               <View style={styles.detailInfoItemLine}>
                                    <Text style={styles.detailInfoLeft}>降水量：</Text>
                                    <Text style={styles.detailInfoRight}>{elem.rain}</Text>
                                </View>
                                <View style={styles.detailInfoItemLine}>
                                    <Text style={styles.detailInfoLeft}>气压：</Text>
                                    <Text style={styles.detailInfoRight}>{elem.pres}</Text>
                                </View> 
                            </View>
                            

                            <View style={styles.detailInfoItemContainer}>
                                <View style={styles.detailInfoItemLine}>
                                    <Text style={styles.detailInfoLeft}>能见度：</Text>
                                    <Text style={styles.detailInfoRight}>{elem.sight}</Text>
                                </View>
                                <View style={styles.detailInfoItemLine}>
                                    <Text style={styles.detailInfoLeft}>紫外线指数：</Text>
                                    <Text style={styles.detailInfoRight}>{elem.uv}</Text>
                                </View>    
                            </View>
                            
                        </View>
                    </ScrollView>
                </View>
                
            );
        }); 
        
        return (
            <View style={styles.weatherContainer}>
                <Swiper 
                    paginationStyle={{
                        bottom: 10,
                        paddingTop: 10,
                        borderTopColor: 'rgba(255,255,255,0.7)',
                        borderTopWidth: 1 / PixelRatio.get(),
                    }}
                    showsButtons={false}>
                    {slides}
                </Swiper>
                <TouchableHighlight style={styles.backBtn} onPress={() => this.props.onBackPress()}>
                    <Icon name="ios-list-outline" size={25} style={styles.backBtnIcon} />
                </TouchableHighlight>
            </View>
        );
    }

}

export default class Day2 extends React.Component{

    onBackPress(){
        this.props.navigator.pop();
    }

    render(){
        return (
            <View>
                <Weather onBackPress = {() => this.onBackPress()} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    weatherContainer:{
    },
    weatherPage:{
    },
    //==============================================================
    // PageContainer
    //==============================================================
    pageContainer:{
        position: "absolute",
        top:25,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - 60,
    },
    //==============================================================
    // headInfo
    //==============================================================
    headInfo:{
        paddingTop: 70,
        alignItems: 'center',
        paddingBottom: 60,
    },
    handCity:{
        fontSize: 25,
        color: "#fff",
    },
    handAbs:{
        fontSize: 15,
        color: "#fff",
    },
    handDegree:{
        fontSize: 85,
        color: "#fff",
    },
    handCircle:{
        position:'relative',
        top:15,
        fontSize: 35,
        color: "#fff",
    },
    //==============================================================
    // today
    //==============================================================
    todayContainer:{
        flexDirection: "row",
        width: Dimensions.get('window').width,
    },
    todayHead:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingLeft: 15,
    },
    todayTail:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingRight: 15,
    },
    todayWeek:{
        fontSize: 15,
        color: "#fff",
        width:50,
    },
    todayDay:{
        fontSize: 15,
        color: "#fff",
    },
    todayLow:{
        fontSize: 15,
        color: "#eee",
        width:30,
    },
    todayLowNigth:{
        fontSize: 15,
        color: "#aaa",
        width:30,
    },
    todayHigh:{
        fontSize: 15,
        color: "#fff",
    }, 

    //==============================================================
    // hoursContainer
    //==============================================================
    hoursContainer:{
        marginTop: 5,
        marginBottom: 5,
        height: 100,
        borderTopColor:"rgba(255,255,255,0.7)",
        borderTopWidth: 1 / PixelRatio.get(),
        borderBottomColor:"rgba(255,255,255,0.7)",
        borderBottomWidth: 1 / PixelRatio.get(),
    },
    hoursTimeContainer:{
        flex: 1,
        width: 60,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    hoursTime:{
        color: '#fff',
        fontSize: 12,
    },
    hoursTimeNow:{
        color: '#fff',
        fontSize: 13,
        fontWeight: "500",
    },
    hoursTimeIcon:{
        color: '#fff',
    },
    hoursTimeDegree:{
        color: '#fff',
        fontSize: 12,
    },
    hoursTimeDegreeNow:{
        color: '#fff',
        fontSize: 13,
        fontWeight: "500",
    },

    //==============================================================
    // days
    //==============================================================
    daysContainer:{
        width: Dimensions.get('window').width,
    },
    daysItemContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 15,
    },
    daysNameContainer:{},
    daysIconContainer:{},
    daysTemperatureContainer:{
        flexDirection: 'row',
        width:50,
        justifyContent: 'space-between',
    },
    daysName:{
        fontSize: 16,
        color: '#fff',
    },
    daysIcon:{
        color: '#fff',
    },
    //低温白天
    daysTemperatureLow:{
        fontSize: 16,
        color: '#eee',
    },
    //低温晚上
    daysTemperatureLowNight:{
        fontSize: 16,
        color: '#aaa',
    },
    daysTemperatureHight:{
        fontSize: 16,
        color: '#fff',
    },
    //==============================================================
    // infoContainer
    //==============================================================
    infoContainer:{
        marginTop: 5,
        marginBottom: 5,
        height: 50,
        borderTopColor: "rgba(255,255,255,0.7)",
        borderTopWidth: 1 / PixelRatio.get(),
        borderBottomColor: "rgba(255,255,255,0.7)",
        borderBottomWidth: 1 / PixelRatio.get(),
        justifyContent: 'center',
    },
    infoContent:{
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
    },
    //==============================================================
    // detail info
    //==============================================================
    detailInfoContainer:{
        
    },
    detailInfoItemContainer:{
        marginTop: 5,
        marginBottom: 5,
    },
    detailInfoItemLine:{
        flexDirection: 'row',
    },
    detailInfoLeft:{
        flex: 1,
        fontSize: 15,
        color: "#fff",
        textAlign: 'right',
        paddingRight: 20,
    },
    detailInfoRight:{
        flex: 1,
        fontSize: 16,
        color: "#fff",
    },
    detailInfoDir:{
        fontSize: 9,
        color: 'rgba(255,255,255,0.9)',
    },
    //==============================================================
    // backBtn
    //==============================================================
    backBtn:{
        position: 'absolute',
        right: 10,
        bottom: 7,
    },
    backBtnIcon:{
        color: '#fff',
    },
});