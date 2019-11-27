import { createReducer, completeReducer, completeState } from 'redux-recompose';
import Immutable from 'seamless-immutable';

import { actions } from './actions';

const default_weather=[{"id":4625286475808768,
"weather_state_name":"Heavy Rain","weather_state_abbr":"hr","wind_direction_compass":"SW",
"created":"2019-11-26T21:16:02.775074Z","applicable_date":"2019-11-27","min_temp":8.315,"max_temp":11.03,
"the_temp":11.239999999999998,"wind_speed":4.495630034812694,"wind_direction":232.6765724008181,
"air_pressure":982.0,"humidity":86,"visibility":6.771081881810229,"predictability":77},
{"id":6162886613270528,"weather_state_name":"Light Rain","weather_state_abbr":"lr","wind_direction_compass":"W","created":"2019-11-26T21:16:02.690911Z","applicable_date":"2019-11-28",
"min_temp":6.26,"max_temp":9.615,"the_temp":9.77,"wind_speed":6.704494184782205,
"wind_direction":278.27362599337715,"air_pressure":994.0,"humidity":80,"visibility":9.05897061162809,
"predictability":75},{"id":4584209979015168,"weather_state_name":"Clear","weather_state_abbr":"c",
"wind_direction_compass":"NNW","created":"2019-11-26T21:16:02.970325Z","applicable_date":"2019-11-29",
"min_temp":1.355,"max_temp":6.08,"the_temp":6.05,"wind_speed":4.927763400432144,"wind_direction":342.4808797020995,"air_pressure":1014.0,"humidity":74,"visibility":13.936113099498925,"predictability":68},{"id":5149452237012992,"weather_state_name":"Light Cloud","weather_state_abbr":"lc","wind_direction_compass":"ENE","created":"2019-11-26T21:16:01.795979Z","applicable_date":"2019-11-30",
"min_temp":2.0,"max_temp":6.16,"the_temp":5.3149999999999995,"wind_speed":4.946861034812694,
"wind_direction":64.16725493069856,"air_pressure":1020.5,"humidity":78,"visibility":6.242294997216257,
"predictability":70},{"id":4603634035720192,"weather_state_name":"Clear","weather_state_abbr":"c",
"wind_direction_compass":"NNE","created":"2019-11-26T21:16:04.585665Z","applicable_date":"2019-12-01",
"min_temp":2.87,"max_temp":5.95,"the_temp":5.46,"wind_speed":6.600611429253162,"wind_direction":15.5,
"air_pressure":1023.0,"humidity":78,"visibility":9.919569712876799,"predictability":68}];

const stateDescription = {
  states: default_weather,
};

export const initialState = completeState(stateDescription);

const reducerDescription = {
  primaryActions: [actions.GET_WEATHER],
  override: {
    [actions.GET_WEATHER]: (state, action) =>
      state.merge({ [action.target]: action.payload }),
  }
};

export default createReducer(Immutable(initialState), completeReducer(reducerDescription));