import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import * as FavoriteActions from '../../../../core/actions/favorites.actions';
import { map } from 'rxjs/operators';
import { AppState } from 'src/app/app.state';
import { WeatherDetails } from 'src/app/core/models/weather.details.model';
import { Weather } from 'src/app/core/models/weather.model';
import { WeatherService } from 'src/app/core/services/weather.service';
import { ToastrService } from 'ngx-toastr';
import { ElementSchemaRegistry } from '@angular/compiler';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent implements OnInit, OnDestroy {


  weatherForm: FormGroup = null;

  selectedCity$ = new BehaviorSubject<string>(null);
  selectedWeather: Weather = null;

  subscriptions: Subscription[] = [];
  favorites: Observable<Weather[]> = null;
  isFavorite: boolean;

  specificDetails: WeatherDetails[] = [];

   constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private weatherService: WeatherService,
    private store: Store<AppState>,
    private toastr: ToastrService) {

    const navigation = this.router.getCurrentNavigation();
    const state = navigation.extras.state as {name: string};
    const city = state && state.name ? state.name: 'Tel Aviv';
    this.selectedCity$.next(city);
   }

  async ngOnInit(): Promise<void> {
    this.favorites = this.store.select('favorites');

    this.selectedCity$.subscribe(async city => {
      this.selectedWeather =  await this.weatherService.getWeatherOfCity(city);

      if(this.selectedWeather){
        this.specificDetails = this.selectedWeather.WeatherData.WeeklyDailyForecast.DailyForecasts.map((item, i) => {
          let temperature = item.Temperature.Minimum.Value + '`' +  item.Temperature.Minimum.Unit;
          return {title: this.weatherService.WEATHER_DAYS[i], degrees: temperature, description: null }
        });

        this.store.select('favorites').subscribe(x => {
          this.isFavorite = x.findIndex(f => f.Name.toLowerCase() == this.selectedWeather?.Name.toLowerCase()) >= 0;
        });

      }
    });

    this.weatherForm = this.formBuilder.group({
      city: [this.selectedCity$.value, Validators.required]
    })
  }

  ngOnDestroy(){
    this.subscriptions.map( x => x.unsubscribe());
  }

  async submitForm(){
    this.selectedCity$.next(this.weatherForm.value.city);
  }


  async AddFavorite(){
   await this.store.dispatch(new FavoriteActions.AddFavorite(this.selectedWeather));
   this.toastr.success(this.selectedWeather.Name + ' has been added to your favorite list');
  }

  async RemoveFavorite(){
    await this.store.dispatch(new FavoriteActions.RemoveFavorite(this.selectedWeather.ID));
    this.toastr.info(this.selectedWeather.Name + ' has been removed from your favorite list');
  }

}
