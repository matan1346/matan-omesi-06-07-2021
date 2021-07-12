import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { WeatherContract } from './core/contract/weather.contract';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  isChecked = true;

  @HostBinding() className = '';

  toggleControl = new FormControl(false);

  constructor(private weatherService: WeatherContract) {}


  ngOnInit(): void {

    this.toggleControl.valueChanges.subscribe(val => {
      this.className = val ? 'darkMode' : '';
    });

    this.weatherService.getWeatherUnit().subscribe(u => {
      this.isChecked = u != 'C';
    });
  }

  ToggleTemperature(){

    this.weatherService.ToggleTemperatureUnit();
  }

}
