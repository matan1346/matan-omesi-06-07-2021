import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WeatherDetails } from 'src/app/core/models/weather.details.model';

@Component({
  selector: 'app-weather-degrees-view',
  templateUrl: './weather-degrees-view.component.html',
  styleUrls: ['./weather-degrees-view.component.scss']
})
export class WeatherDegreesViewComponent implements OnInit {


  @Input() weatherDetails: WeatherDetails;
  @Input() showDescription: boolean = true;

  @Output() onClickItem = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  OnClick(){
    this.onClickItem.emit(this.weatherDetails.title);
  }

}
