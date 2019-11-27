import { createTypes, completeTypes } from 'redux-recompose';
import * as WeatherService from '@services/WeatherService';

export const actions = createTypes(completeTypes(['GET_WEATHER']), '@@WEATHER');

const statesTarget = 'states';
export const actionCreators = {
  getWeather: coords => ({
    type: actions.GET_WEATHER,
    target: statesTarget,
    service: WeatherService.getWeather,
    successSelector: response => response.data?.consolidated_weather?.splice(1,5),
    payload: coords
  })
};
