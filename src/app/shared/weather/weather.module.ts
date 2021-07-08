import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherDegreesViewComponent } from './components/weather-degrees-view/weather-degrees-view.component';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';
import { WeatherFavoritesComponent } from './components/weather-favorites/weather-favorites.component';
import { MaterialModule } from 'src/app/core/modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WeatherService } from 'src/app/core/services/weather.service';



@NgModule({
  declarations: [WeatherDegreesViewComponent, WeatherDetailsComponent, WeatherFavoritesComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [WeatherService],
  exports: [WeatherDegreesViewComponent, WeatherDetailsComponent, WeatherFavoritesComponent]
})
export class WeatherModule { }
