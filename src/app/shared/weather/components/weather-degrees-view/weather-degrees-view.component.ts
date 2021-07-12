import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { AppState } from 'src/app/app.state';
import { WeatherContract } from 'src/app/core/contract/weather.contract';
import { WeatherDetails } from 'src/app/core/models/weather.details.model';
import { WeatherType } from 'src/app/core/models/weather.model';
import * as FavoriteActions from '../../../../core/actions/favorites.actions';

@Component({
  selector: 'app-weather-degrees-view',
  templateUrl: './weather-degrees-view.component.html',
  styleUrls: ['./weather-degrees-view.component.scss']
})
export class WeatherDegreesViewComponent implements OnInit {

  @Input() weatherDetails: WeatherDetails;
  @Input() showDescription: boolean = true;

  @Output() onClickItem = new EventEmitter<any>();

  unitDisplay: WeatherType;
  allowMove = true;
  showDelete = false;

  constructor(private weatherService: WeatherContract, private store: Store<AppState>, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.weatherService.getWeatherUnit().subscribe(u => {
      this.unitDisplay = u;
    });
  }

  OnClick(){
    if(this.allowMove)
      this.onClickItem.emit({country: this.weatherDetails.countryName, city: this.weatherDetails.cityName});
      this.allowMove = true;
  }

  async RemoveFavorite(){
    await this.store.dispatch(new FavoriteActions.RemoveFavorite(this.weatherDetails.ID));
    this.toastr.info(this.weatherDetails.title + ' has been removed from your favorite list');
    this.allowMove = false;
  }

}
