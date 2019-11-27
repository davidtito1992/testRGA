import React, {useState} from 'react';
import {View, SafeAreaView, Switch, FlatList, Image, PermissionsAndroid} from 'react-native';
import CustomButton from '@components/CustomButton';
import styles from './styles';
import CustomText from '@app/components/CustomText';
import moment from "moment";
import Config from 'react-native-config';
import Geolocation from 'react-native-geolocation-service';

const GEOLOCATION_OPTIONS = {
  enableHighAccuracy: true,
  timeout: 30000,
  maximumAge: 10000
};

export default Home = props => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const FlatListItemSeparator = () => <View style={styles.separator}/>;

  
  const requestLocation = async isSwitchOn => {
    if(isSwitchOn){
      try {
        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          Geolocation.getCurrentPosition(position => props.getWeather({lat: position?.coords?.latitude , long:position?.coords?.longitude}),
            error => console.log(error.code, error.message),
            GEOLOCATION_OPTIONS
          );
          setIsSwitchOn(isSwitchOn);
        } else setIsSwitchOn(!isSwitchOn);
      } catch (err) {
        console.warn(err);
      }
    } else setIsSwitchOn(isSwitchOn);
  }

  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <CustomText>FORECAST</CustomText>
          <Switch
          value={isSwitchOn}
          onValueChange={requestLocation}
          />
        </View>
        <View style={styles.list}>
          <FlatList
          data={props.weatherList}
          ItemSeparatorComponent={FlatListItemSeparator}
          keyExtractor={item => item.applicable_date}
          renderItem={({item}) =>
          <View style={styles.item}>
            <CustomText>{moment(item.applicable_date).format('dddd')}</CustomText>
            <CustomText> {`${parseInt(item.the_temp)}ºC`} </CustomText>
            <Image source={{uri:`${Config.BASE_URL}/static/img/weather/png/64/${item.weather_state_abbr}.png`}} style={{height:50,width:50}}/>
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
            onPress={()=>props.onTools('Noise')}
            activeOpacity={0.7}
            title="Noise Detector"
            textStyle={styles.buttonText}
            style={ styles.button}
          />
          <CustomButton
            onPress={props.onTools}
            activeOpacity={0.7}
            title="Emergency Light"
            textStyle={styles.buttonText}
            style={ styles.button}
          />
          </View>
      </SafeAreaView>
    );
}
