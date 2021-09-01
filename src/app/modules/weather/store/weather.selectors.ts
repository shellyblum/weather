import {createFeatureSelector, createSelector, MemoizedSelector} from "@ngrx/store";
import {IWeatherState, weatherFeatureKey} from "./weather.state";

export const weatherStateSelector: MemoizedSelector<any, IWeatherState> = createFeatureSelector<IWeatherState>(weatherFeatureKey);

export const CordsSelector = createSelector(weatherStateSelector, (state: IWeatherState) => state.coords);
