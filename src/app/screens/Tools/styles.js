import {StyleSheet} from 'react-native';
import {green,white, transparent, gray} from '@constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '20%',
    backgroundColor: '#ffffff',
  },
  header:{
    marginVertical:40,
    flexDirection:'row',
    justifyContent:'space-around'
   }
});
