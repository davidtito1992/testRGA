import { StyleSheet } from 'react-native';
import { green, gray, transparent } from '@constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '10%',
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
    width: 240
  },
  formButton: {
    backgroundColor: green,
    padding: 10,
    borderRadius: 3,
    margin: 20
  }
});
