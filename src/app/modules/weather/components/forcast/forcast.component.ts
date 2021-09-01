import { Component, OnInit } from '@angular/core';
import {WeatherService} from "../../services/weather.service";
import {select, Store} from "@ngrx/store";
import {CordsSelector} from "../../store/weather.selectors";
import * as WeatherActions from "../../store/weather.actions";


@Component({
  selector: 'app-forcast',
  templateUrl: './forcast.component.html',
  styleUrls: ['./forcast.component.scss']
})
export class ForcastComponent implements OnInit {
  currentLocationForcast: any;

  constructor(private store: Store<any>,
              private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.getCurrentLocation().subscribe((position: any) => {
      let coords = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      };
      this.store.dispatch(WeatherActions.UpdateCurrenCordsAction({coords}));
      this.weatherService.getForcastByCoords(coords).subscribe((cast: any) => {
        this.currentLocationForcast = cast;
      });
    });
  }

  addCity() {

  }

}
