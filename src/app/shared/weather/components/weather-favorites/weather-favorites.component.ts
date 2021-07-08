import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs-compat/operator/map';
import { AppState } from 'src/app/app.state';
import { WeatherDetails } from 'src/app/core/models/weather.details.model';
import { Weather } from 'src/app/core/models/weather.model';
import { WeatherService } from 'src/app/core/services/weather.service';

@Component({
  selector: 'app-weather-favorites',
  templateUrl: './weather-favorites.component.html',
  styleUrls: ['./weather-favorites.component.scss']
})
export class WeatherFavoritesComponent implements OnInit {

  favorites: WeatherDetails[] = [];

  constructor(private router: Router, private store: Store<AppState>, private weatherService: WeatherService) { }


  weatherData: Observable<Weather[]>;

  ngOnInit(): void {



    this.store.select('favorites').subscribe(x => {

      this.favorites = x.map(f =>  {
        let temperature = f.WeatherData.CurrentConditions[0].Temperature.Metric.Value + '`' +   f.WeatherData.CurrentConditions[0].Temperature.Metric.Unit;
        return {title: f.Name, degrees: temperature, description: f.WeatherData.CurrentConditions[0].WeatherText}
      });

    });
  }

  OnClickWeather(name: string){
    const navigationExtras: NavigationExtras = {state: {name: name}};
    this.router.navigate(['home'], navigationExtras);
  }

}
