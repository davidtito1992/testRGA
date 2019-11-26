import Reactotron from 'reactotron-react-native';
import { create } from 'apisauce';
import Config from 'react-native-config';

const api = create({
  baseURL:Config.BASE_URL,
  timeout: 5000
});

api.addMonitor(Reactotron.apisauce);

export const apiSetup = dispatch => { // eslint-disable-line no-unused-vars, prettier/prettier
  if (baseURL === 'http://business.com') {
    console.warn('API baseURL has not been properly initialized');
  }

  api.addMonitor(response => {
    if (response.status === 401) {
      // dispatch(actions.sessionExpired());
      console.warn('Unhandled session expiration');
    }
  });

  api.addMonitor(response => {
    if (response.problem === 'NETWORK_ERROR') {
      // dispatch(actions.noInternetConnection());
      console.warn('Unhandled request without connection');
    }
  });
};

export default api;
