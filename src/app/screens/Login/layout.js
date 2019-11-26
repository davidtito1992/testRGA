import React from 'react';
import {View, Image} from 'react-native';
import PropTypes from 'prop-types';
import i18next from 'i18next';
import {transparent} from '@constants/colors';
import withLoadable from '@components/Loadable';
import CustomTextInput from '@components/CustomTextInput';
import CustomButton from '@components/CustomButton';
import { Formik } from 'formik';
import styles from './styles';
import { validateNickName, validateRequired,validateAll } from '@utils/formUtils';


const validateName = validateAll(
  validateRequired('registerPersonalData.NAME_REQUIRED'),
  validateNickName('registerPersonalData.NAME_INVALID')
);

export function Login({onLogin}) {
  return (
    <View style={styles.container}>
      <Formik initialValues={{ name: '', builder:'' }} onSubmit={onLogin}>
      {formProps => (
      <View>
      <View style={styles.formElementContainer}>
        <CustomTextInput
          name="name"
          underlineColorAndroid={transparent}
          placeholder={i18next.t('LOGIN:USER_NAME')}
          style={styles.formElement}
          validate={validateName}
          onChange={formProps.handleChange('name')}
          onBlur={formProps.handleBlur('name')}
          value={formProps.values.name}
        />
      </View>
      <CustomButton
        green
        onPress={formProps.handleSubmit}
        style={styles.formButton}
        title={i18next.t('LOGIN:LOGIN_MESSAGE', {name: 'TestRGA'})}
        activeOpacity={0.7}
      />
      </View>
      )}
      </Formik>
    </View>
  );
}

Login.propTypes = {
  onLogin: PropTypes.func.isRequired
};

export default withLoadable(props => props.loading)(Login);
