import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Weather } from '../weather';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.css']
})
export class WeatherDisplayComponent implements OnInit {

  weather: Weather = {
    temp: 0,
    feelsLike: 0,
    humidity: 0
  }

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  private weatherURL = 'https://api.openweathermap.org/data/2.5/weather?zip=16602,us&appid=431d09d780e3c761a8589f7bd5273fe0&units=imperial';

  getWeather(): Observable<Weather[]> {
    return this.http.get<Weather[]>(this.weatherURL)
  }

}
// https://api.openweathermap.org/data/2.5/weather?zip=16602,us&appid=431d09d780e3c761a8589f7bd5273fe0&units=imperial