export const validateRequired = translationKey => value => {
  if (!value) {
    return translationKey;
  }
  return undefined;
};

export const validateRequiredOrZero = translationKey => value => {
  if (!value && value !== 0) {
    return translationKey;
  }
  return undefined;
};

export const validatePersonNames = translationKey => value => {
  if (!/^[a-zA-ZÁÉÍÓÚÑñáéíóú]+(([ ][a-zA-ZÁÉÍÓÚÑñáéíóú])+[a-zA-ZÁÉÍÓÚÑñáéíóú]*){1,3}$/i.test(value)) {
    return translationKey;
  }
  return undefined;
};

export const validateNickName = translationKey => value => {
  if (!/^[-@_a-zA-Z-ÁÉÍÓÚÑñáéíóú0-9]+(\s+[-@_a-zA-Z-ÁÉÍÓÚÑñáéíóú0-9]+)*$/i.test(value)) {
    return translationKey;
  }
  return undefined;
};

export function validateEmail(value) {
  let error;
  if (!value) {
    error = 'login.EMAIL_REQUIRED';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'login.EMAIL_INVALID';
  }
  return error;
}

export function validatePassword(value) {
  let error;
  if (!value) {
    error = 'login.PASSWORD_REQUIRED';
  } else if (!/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.{8,})/.test(value)) {
    error = 'login.PASSWORD_INVALID';
  }
  return error;
}

export const validateOnlyNumbers = translationKey => value => {
  if (!/^\d+$/.test(value)) {
    return translationKey;
  }
  return undefined;
};

export const validateMinLength = (translationKey, minLength) => value => {
  if (value.length < minLength) {
    return translationKey;
  }
  return undefined;
};

export const validateLengthBetween = (translationKey, minLength, maxLength) => value => {
  if (value.length < minLength || value.length > maxLength) {
    return translationKey;
  }
  return undefined;
};

export const validateLength = (translationKey, length) => value => {
  if (value.length !== length) {
    return translationKey;
  }
  return undefined;
};

export const validateNotBlank = translationKey => value => {
  if (!value.replace(/\s/g, '').length) {
    return translationKey;
  }
  return undefined;
};

export const validateAll = (...validations) => value =>
  validations.map(validation => validation(value)).find(error => !!error);
