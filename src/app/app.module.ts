import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

import { StoreModule } from '@ngrx/store';
import { reducer } from './core/reducers/favorite.reducer';
import { MaterialModule } from './core/modules/material/material.module';
import { WeatherContract } from './core/contract/weather.contract';
import { WeatherTestService } from './core/services/weather.test.service';
import { WeatherService } from './core/services/weather.service';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 3500,
      positionClass: 'toast-bottom-right',
      progressBar: true,
      progressAnimation: 'increasing',
      preventDuplicates: true
    }),
    StoreModule.forRoot({
      favorites: reducer
    })
  ],
  providers: [
    {provide: WeatherContract, useClass: WeatherService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
