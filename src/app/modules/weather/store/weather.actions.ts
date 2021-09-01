import {createAction, props} from "@ngrx/store";


export const GetCurrentLocationWeatherAction = createAction('[Weather/API] Get_Weather');

export const UpdateCurrenCordsAction = createAction('[Weather] Update_Cords', props<{ coords }>());

