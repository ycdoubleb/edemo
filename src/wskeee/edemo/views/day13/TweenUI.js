import React,{Component} from 'react';
import {View,Text,Image,StyleSheet,TouchableHighlight,TouchableOpacity,TextInput,CameraRoll} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-picker';

import Util from '../utils';
import Photo from './Photo';

export default class extends Component{
    //============================================================================
    //
    // vars
    //
    //============================================================================
    funView = null;
    tview = null;

    constructor(props) {
        super(props);
        this.state = {
            remainTextNum: 140,
        }
    }
    

    //============================================================================
    //
    // private
    //
    //============================================================================
    /**
     * 更新文字
     * @param {string} text 
     */
    _upateText(text){
        this.setState({remainTextNum: 140 - text.length});
    }
    //============================================================================
    //
    // public
    //
    //============================================================================
    render(){
        return (
            <View ref={(v)=>{this.tview = v}}>
                <View style={styles.contentContainer}>
                    <View style={styles.headContainer}>
                        <Image style={styles.icon} source={require('../../assets/imgs/wskeee.jpg')}/>
                        <Icon name='md-close' size={25} color="#2aa2ef" />
                    </View>
                    <TextInput 
                        style={styles.editTxt}
                        multiline={true}
                        placeholder='请输入制作需求！'
                        maxLength={140}
                        placeholderTextColor='#ccc'
                        underlineColorAndroid = 'transparent'
                        onChangeText={(text) => this._upateText(text)}
                    />
                </View>
                <FunView ref={(_funView)=>{this.funView = _funView}} numOfText={this.state.remainTextNum} />
            </View>
        );
    }
}

class FunView extends Component{
    static defaultProp = {
        numOfText: 140,
    }

    static propTypes = {
        numOfText: React.PropTypes.number.isRequired,
    }

    constructor (props) {
        super(props)
        this.state = {
            images: [],
        }
    }
    

    //============================================================================
    //
    // vars
    //
    //============================================================================

    //============================================================================
    //
    // private
    //
    //============================================================================
    /**
     * 显示图片
     * @param {*} data 
     */
    _showPhotos(data){
        const assets = data.edges;
        const images = assets.map((asset)=>asset.node.image);

        this.setState({
            images: images,
        });

    }
    /**
     * 获取图片失败
     * @param {*} err 
     */
    _getPhotoFaild(err){
        console.log(err);
    }

    /**
     * 选择图片
     */
    _selecteImage(){
        var options = {
                title: 'Select Avatar',
                customButtons: [
                    {name: 'fb', title: 'Choose Photo from Facebook'},
                ],
                storageOptions: {
                    skipBackup: true,
                    path: 'images'
                }
            };
        ImagePicker.launchImageLibrary(options, (response) => {
            //console.warn('Response = ', response);

            if (response.didCancel) {
                console.warn('User cancelled image picker');
            }
            else if (response.error) {
                console.warn('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.warn('User tapped custom button: ', response.customButton);
            }
            else {
                let source = { uri: response.uri };

                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    images: [source],
                });
            }
        });
    }

    _selectFromCamera(){
        var options = {
                title: 'Select Avatar',
                customButtons: [
                    {name: 'fb', title: 'Choose Photo from Facebook'},
                ],
                storageOptions: {
                    skipBackup: true,
                    path: 'images'
                }
            };
        ImagePicker.launchCamera(options, (response) => {
            //console.warn('Response = ', response);

            if (response.didCancel) {
                console.warn('User cancelled image picker');
            }
            else if (response.error) {
                console.warn('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.warn('User tapped custom button: ', response.customButton);
            }
            else {
                let source = { uri: response.uri };

                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    images: [source],
                });
            }
        });
    }
    //============================================================================
    //
    // overide
    //
    //============================================================================
    componentDidMount() {
        const fetchParams = {
                first: 10,
              };
        CameraRoll.getPhotos(fetchParams).done((data)=>this._showPhotos(data),(err)=>this._getPhotoFaild(err));
    }
    

    //============================================================================
    //
    // public
    //
    //============================================================================

    render(){
        return (
            <View style={styles.funRootContainer}>
                <View style={styles.toolsContainer}>
                    <View style={styles.leftToolsContainer}>
                        <TouchableOpacity>
                            <Icon name="ios-pin" size={23} color="#8899a5"/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this._selectFromCamera()}>
                            <Icon name="md-camera" size={23} color="#8899a5"/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this._selecteImage()}>
                            <Icon name="md-image" size={23} color="#8899a5"/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon name="md-pie" size={23} color="#8899a5"/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.rightToolsContainer}>
                        <Text>{this.props.numOfText} </Text>
                        <TouchableHighlight style={[styles.sendBtn,this.props.numOfText == 140 ? styles.sendBtnDisabled : styles.sendBtnEnabled]}>
                            <Text style={this.props.numOfText == 140 ? styles.btnTextDisabled : styles.btnTextEnabled}>发推</Text>
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={styles.selectContainer}>
                    <View style={styles.tileContainer}>
                        <Icon name="ios-camera" size={80} color="#2aa2ef" />
                    </View>
                    <View style={styles.tileContainer}>
                        <Icon name="ios-videocam" size={80} color="#2aa2ef" />
                    </View>
                    {this.state.images.map(
                        (image,index)=><View key={index} style={styles.tileContainer}><Photo source={{uri:image.uri}}/></View>)}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    //==============================================================
    // 其它样式
    //==============================================================
    contentContainer:{
        height: 400,
    },
    headContainer:{
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-between',
        borderBottomWidth: Util.pixel,
        borderBottomColor: '#999',
    },
    icon: {
        width: 30,
        height: 30,
        resizeMode: 'cover',
        borderRadius: 6,
    },
    editTxt:{
        height: 350,
        fontSize: 16,
        textAlignVertical: 'top',
    },
    //==============================================================
    // FunView
    //==============================================================
    funRootContainer:{

    },
    toolsContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: Util.pixel,
        borderRightColor: '#ccc',
        borderBottomWidth: Util.pixel,
        borderBottomColor: '#ccc',
        height: 35,
    },
    leftToolsContainer:{
        flexDirection: 'row',
        width: 210,
        justifyContent: 'space-around',
    },
    rightToolsContainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingRight: 10,
        alignItems: 'center',
    },
    sendBtn:{
        width: 60,
        height: 35,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sendBtnDisabled:{
        borderColor:"#ccd6dd",
        borderWidth:1
    },
    sendBtnEnabled:{
        backgroundColor:"#2aa2ef"
    },
    btnTextDisabled:{
        color:"#ccd6dd",
        fontSize:14
    },
    btnTextEnabled:{
        color:"#fff",
        fontSize:14
    },
    //==============================================================
    // 内容选择框
    //==============================================================
    selectContainer:{
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    tileContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: Util.pixel,
        borderRightColor: '#ddd',
        borderBottomWidth: Util.pixel,
        borderBottomColor: '#ddd',
        padding: 10,
        width: 113,
        height: 113,
    },
    photo:{
        width: 113,
        height: 113,
    },
});