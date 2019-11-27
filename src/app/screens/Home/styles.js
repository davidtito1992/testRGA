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
    width:'86%',
    flexDirection:'row',
    justifyContent:'space-between',
    marginVertical:10,
    paddingHorizontal:15
  },
  tools:{
    paddingVertical:10,
    alignItems:'center',
    marginTop:5
  },
  separator:{
    height: 1,
    width: "100%",
    backgroundColor: "#607D8B",
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
