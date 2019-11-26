import React, {  memo } from 'react';
import {View} from 'react-native';
import CustomText from '@components/CustomText';
import styles from './styles';


const ToolsContainer = () => {
  const handleSubmit= ()=>{};

  return (
    <View style={styles.container}>
    <CustomText style={{textAlign: 'center', fontSize: 20, paddingVertical: 30}}>
    TOOLS
    </CustomText>
    </View>
        );
};
export default memo(ToolsContainer);