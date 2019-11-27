import React, { useCallback, memo } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { actionCreators as authActions } from '@redux/auth/actions';
import { actionCreators as WeatherActions } from '@redux/weather/actions';

import Home from './layout';

const HomeContainer = (props) => {
  const dispatch = useDispatch();
  const handleGetWeather = useCallback( coords => dispatch(WeatherActions.getWeather(coords)), [dispatch]);
  const weatherList = useSelector(state => state.weather.states);
  const handleLogout = useCallback(() => dispatch(authActions.logout()), [dispatch]);
  const handleTools = useCallback( tool => {props.navigation.navigate('Tools',{tool})});

  return <Home onLogout={handleLogout} onTools={handleTools} weatherList={weatherList} getWeather={handleGetWeather}/>;
};

export default memo(HomeContainer);
