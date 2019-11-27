import React, {  memo, useState } from 'react';
import {View, Switch, Platform,PermissionsAndroid} from 'react-native';
import CustomText from '@components/CustomText';
import styles from './styles';
import Torch from 'react-native-torch';
import RNSoundLevel from 'react-native-sound-level'

const ToolsContainer = props => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const NOISE= props.navigation.getParam('tool', 'NO-ID')==='Noise';
  const toolText= NOISE? `Noise detector`: 'Emergency light';
  
  const requestRecordAudio = async isSwitchOn => {
    if(isSwitchOn){
        try {
          const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.RECORD_AUDIO);
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            RNSoundLevel.start();
            setIsSwitchOn(isSwitchOn);
            console.log('You can use the audio');
          } else setIsSwitchOn(!isSwitchOn);
        } catch (err) {
          console.warn(err);
        }
    } else setIsSwitchOn(isSwitchOn);
  }

  
  const requestCamera = async isSwitchOn => {
    if(isSwitchOn){
        try {
          const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            Torch.switchState(isSwitchOn);
            setIsSwitchOn(isSwitchOn);
            console.log('You can use the camera');
          } else setIsSwitchOn(!isSwitchOn);
        } catch (err) {
          console.warn(err);
        }
    } else setIsSwitchOn(isSwitchOn);
  }

  const handleSwitch= isSwitchOn =>{
    if(isSwitchOn) {
      if (NOISE) requestRecordAudio(isSwitchOn);
      else  requestCamera(isSwitchOn);
    }else {
      setIsSwitchOn(isSwitchOn);
      NOISE? RNSoundLevel.stop(): Torch.switchState(isSwitchOn);
    };
  }


  return (
    <View style={styles.container}>
     <View style={styles.header}>
      <CustomText>{`${toolText} (off/on) `}</CustomText>
          <Switch
          value={isSwitchOn}
          onValueChange={handleSwitch}
          />
        </View>
    </View>
        );
};
export default memo(ToolsContainer);