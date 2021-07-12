import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import * as FavoriteActions from '../../../../core/actions/favorites.actions';
import { AppState } from 'src/app/app.state';
import { WeatherDetails } from 'src/app/core/models/weather.details.model';
import { Weather, WeatherType } from 'src/app/core/models/weather.model';
// import { WeatherService } from 'src/app/core/services/weather.service';
import { ToastrService } from 'ngx-toastr';
import { WeatherContract } from 'src/app/core/contract/weather.contract';
import { map, startWith } from 'rxjs/operators';
import { CityGroup, LocalizedID } from 'src/app/core/models/city.result.model';



export const _filter = (opt: LocalizedID[], value: string): LocalizedID[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.LocalizedName.toLowerCase().includes(filterValue));
};



@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent implements OnInit, OnDestroy {

  timerAutoComplete:any;

  weatherForm: FormGroup = null;
  query: string = '';
  stateGroups: CityGroup[] = [];
  allowAuto = false;

  stateGroupOptions: Observable<CityGroup[]>;


  selectedCity$ = new BehaviorSubject<{country: string, city: string}>(null);
  selectedWeather: Weather = null;

  unitDisplay: WeatherType;

  subscriptions: Subscription[] = [];
  favorites: Observable<Weather[]> = null;
  isFavorite: boolean;

  specificDetails: WeatherDetails[] = [];

   constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private weatherService: WeatherContract,
    private store: Store<AppState>,
    private toastr: ToastrService) {

    const navigation = this.router.getCurrentNavigation();
    const state = navigation.extras.state as {countryName: string,cityName: string};
    const countryName = state && state.countryName ? state.countryName : 'IL';
    const cityName = state && state.cityName ? state.cityName: 'Tel Aviv';
    this.selectedCity$.next({country: countryName, city: cityName});
   }

  async ngOnInit(): Promise<void> {

    this.weatherForm = this.formBuilder.group({
      stateGroup: this.query,
    });


    this.favorites = this.store.select('favorites');

    this.selectedCity$.subscribe(async city => {
      this.selectedWeather =  await this.weatherService.getWeatherOfCity(city?.country, city?.city);

      if(this.selectedWeather){
        this.specificDetails = this.selectedWeather.WeatherData.WeeklyDailyForecast.DailyForecasts.map((item, i) => {
          let temperature = item.Temperature.Minimum;
          return {ID: this.selectedWeather.ID, title: this.weatherService.WEATHER_DAYS[i],countryName: city.country, cityName: city.city,degrees: temperature, description: null }
        });

        this.store.select('favorites').subscribe(x => {
          this.isFavorite = x.findIndex(f => f.Name.toLowerCase() == this.selectedWeather?.Name.toLowerCase()) >= 0;
        });

      }
    });

    this.weatherService.getWeatherUnit().subscribe(u => {
      this.unitDisplay = u;
    });

    this.weatherService.getCityAutoComplete().subscribe(ac => {
      this.stateGroups = ac;
      this.allowAuto = false;
      this.weatherForm.get('stateGroup')!.updateValueAndValidity({onlySelf: false, emitEvent: true});
    })


    this.stateGroupOptions = this.weatherForm.get('stateGroup')!.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filterGroup(value))
    );

    this.weatherForm.get('stateGroup')!.valueChanges.subscribe( x => {
      this.query = x;
    })

  }

  ngOnDestroy(){
    this.subscriptions.map( x => x.unsubscribe());
  }


  async AddFavorite(){
   await this.store.dispatch(new FavoriteActions.AddFavorite(this.selectedWeather));
   this.toastr.success(this.selectedWeather.Name + ' has been added to your favorite list');
  }

  async RemoveFavorite(){
    await this.store.dispatch(new FavoriteActions.RemoveFavorite(this.selectedWeather.ID));
    this.toastr.info(this.selectedWeather.Name + ' has been removed from your favorite list');
  }

  private _filterGroup(value: any): CityGroup[] {

    clearTimeout(this.timerAutoComplete);
    if(this.allowAuto){
      this.timerAutoComplete = setTimeout(() => {
        this.getCities()
      }, 1000);
    }
    this.allowAuto = true;
    return this.stateGroups;
  }

  getCities(){
    if(this.query == '')
      return;
    this.weatherService.AutoCompleteCities(this.query);
  }

  async SelectOption(q) : Promise<void>{
    this.allowAuto = false;
    this.selectedCity$.next({country: q.option.group.label, city: q.option.value});
  }

}
