import { createReducer, on } from '@ngrx/store';
import * as WeatherActions from "./weather.actions";
import {initialWeatherState} from "./weather.state";

export const weatherReducer = createReducer(
  initialWeatherState,

  on(WeatherActions.GetCurrentLocationWeatherAction, (state, {}) => ({
    ...initialWeatherState
  })),

  on(WeatherActions.UpdateCurrenCordsAction, (state, {coords}) => ({
    ...state,
    coords: {...coords}
  }))
);
