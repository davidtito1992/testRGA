import React, {useState} from 'react';
import {View, SafeAreaView, Switch, FlatList, Image} from 'react-native';
import CustomButton from '@components/CustomButton';
import styles from './styles';
import CustomText from '@app/components/CustomText';

export default Home = props => {
  const [IsSwitchOn, setIsSwitchOn] = useState(false);
  const FlatListItems= [
    {key: 'One'},
    {key: 'Two'},
    {key: 'Three'},
    {key: 'Four'},
    {key: 'Five'}
  ];
  const FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          marginHorizontal:20,
          width: "90%",
          backgroundColor: "#607D8B",
        }}
      />
    );
}
  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <CustomText>
            FORECAST
          </CustomText>
          <Switch
          value={IsSwitchOn}
          onValueChange={() =>{ setIsSwitchOn( isSwitchOn =>  !isSwitchOn)}}
          />
        </View>
        <View style={styles.list}>
          <FlatList
          data={ FlatListItems }
          ItemSeparatorComponent={FlatListItemSeparator}
          renderItem={({item}) =>
          <View style={{width:300,flexDirection:'row', marginBottom:30}}>
          <CustomText> {item.key} </CustomText>
          <CustomText> prueba 1 </CustomText>
          <Image source={{uri:'https://facebook.github.io/react-native/img/tiny_logo.png'}} />
          </View>}
          />
        </View>
        <View style={styles.separatorContainer}>
          <View style={styles.lineSeparator}/>
          <CustomText>TOOLS</CustomText>
          <View style={styles.lineSeparator}/>
        </View>
        <View style={styles.tools}>
        <CustomButton
            onPress={props.onReport}
            activeOpacity={0.7}
            title="Noise Detector"
            textStyle={styles.buttonText}
            style={ styles.button}
          />
          <CustomButton
            onPress={props.onReport}
            activeOpacity={0.7}
            title="Emergency Light"
            textStyle={styles.buttonText}
            style={ styles.button}
          />
          </View>
      </SafeAreaView>
    );
}
