import {StyleSheet} from 'react-native';
import {gray} from '@constants/colors';

export default StyleSheet.create({
  container: {
   flex:1
  },
  header:{
   marginVertical:40,
   flexDirection:'row',
   justifyContent:'space-around'
  },
  button: {
    width:180,
    backgroundColor: gray,
    borderRadius: 6,
    marginBottom:30
  },
  buttonText: {
    textAlign: 'center',
  },
  list:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    paddingVertical:50,
  },
  item: {
    marginHorizontal:20,
    marginTop:10
  },
  tools:{
    paddingVertical:30,
    alignItems:'center',
    marginTop:5
  },
  separatorContainer:{
    flexDirection:'row',
    justifyContent:'space-around'
   },
  lineSeparator:{
    height: 1,
    marginHorizontal:20,
    marginTop:12,
    width: "30%",
    backgroundColor: "#607D8B",
  }
});
