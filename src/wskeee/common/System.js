/**
 * author wskeee
 * time 2017-02-23
 */
import {PixelRatio} from 'react-native';
import Dimensions from 'Dimensions';

export class Device {
    static getWindowSize() {
        return {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height
        }
    }
    static getPixelSizeForLayoutSize(value){
        return PixelRatio.getPixelSizeForLayoutSize(value);
    }
}