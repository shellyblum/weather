import { Injectable } from '@angular/core';
import * as WeatherActions from "../store/weather.actions";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getCurrentLocation(): Observable<any> {
    return Observable.create(observer => {
      if(window.navigator && window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(
          (position) => {
            observer.next(position);
            observer.complete();
          },
          (error) => observer.error(error)
        );
      } else {
        observer.error('Unsupported Browser');
      }
    });
  }

  getForcastByCoords(coords: any): Observable<any> {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=23a9a60888c24fffcc4a41776f88bf53&units=metric`;
    return this.http.get(apiUrl);
  }

}
