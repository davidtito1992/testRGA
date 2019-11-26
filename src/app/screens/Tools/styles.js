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
  submit: {
    backgroundColor: green,
    color: white,
    width: 'auto',
    height: 'auto',
    padding: 10,
    borderRadius: 6,
    margin: 20
  },
  formElementContainer: {
    backgroundColor: transparent,
    borderBottomColor: gray,
    borderBottomWidth: 1
  },
  formElement: {
    padding: 3,
    margin: 5,
    backgroundColor: transparent,
    height: 30,
    width: 300
  },
  formButton: {
    backgroundColor: green,
    padding: 10,
    borderRadius: 3,
    margin: 20
  }
});
