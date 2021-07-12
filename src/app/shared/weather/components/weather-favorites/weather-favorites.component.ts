import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { WeatherContract } from 'src/app/core/contract/weather.contract';
import { WeatherDetails } from 'src/app/core/models/weather.details.model';
import { Weather } from 'src/app/core/models/weather.model';
// import { WeatherService } from 'src/app/core/services/weather.service';

@Component({
  selector: 'app-weather-favorites',
  templateUrl: './weather-favorites.component.html',
  styleUrls: ['./weather-favorites.component.scss']
})
export class WeatherFavoritesComponent implements OnInit {

  favorites: WeatherDetails[] = [];
  weatherData: Observable<Weather[]>;

  constructor(private router: Router, private store: Store<AppState>, private weatherService: WeatherContract) { }

  ngOnInit(): void {
    this.store.select('favorites').subscribe(x => {
      this.favorites = x.map(f =>  {
        let temperature = f.WeatherData.CurrentConditions[0].Temperature.Metric;
        return {ID: f.ID, title: f.Name,countryName: f.Country, cityName: f.Name, degrees: temperature, description: f.WeatherData.CurrentConditions[0].WeatherText}
      });
    });
  }

  OnClickWeather(cityDetails: any){
    const navigationExtras: NavigationExtras = {state: {cityName: cityDetails.city, countryName: cityDetails.country}};
    this.router.navigate(['home'], navigationExtras);
  }

}
