import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherDetailsComponent } from './shared/weather/components/weather-details/weather-details.component';
import { WeatherFavoritesComponent } from './shared/weather/components/weather-favorites/weather-favorites.component';

const routes: Routes = [
  {path: 'favorites', component: WeatherFavoritesComponent},
  {path: 'home', component: WeatherDetailsComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: '**', redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
