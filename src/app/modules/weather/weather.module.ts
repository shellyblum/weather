import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForcastComponent } from './components/forcast/forcast.component';
import {WeatherService} from "./services/weather.service";
import {StoreModule} from "@ngrx/store";
import {weatherReducer} from "./store/weather.reducer";
import {weatherFeatureKey} from "./store/weather.state";
import {MatFormFieldModule} from "@angular/material/form-field";



@NgModule({
  declarations: [ForcastComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(weatherFeatureKey, weatherReducer),
    MatFormFieldModule
  ],
  providers: [WeatherService],
  exports: [ForcastComponent]
})
export class WeatherModule { }
