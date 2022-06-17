import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Weather } from './weather-display/weather-display.component';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  private weatherURL = 'https://api.openweathermap.org/data/2.5/weather?zip=16602,us&appid=431d09d780e3c761a8589f7bd5273fe0&units=imperial';

  getWeather(): Observable<Weather[]> {
    return this.http.get<Weather[]>(this.weatherURL)
  }
}
