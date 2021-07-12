import { Pipe, PipeTransform } from '@angular/core';
import { TemperatureUnit } from '../models/conditions.model';
import { WeatherType } from '../models/weather.model';

@Pipe({
  name: 'weatherUnit'
})
export class WeatherUnitPipe implements PipeTransform {


  transform(value: TemperatureUnit, unit: WeatherType = 'C',...args: unknown[]): unknown {

    let res: string = '°';
    let num: number = value.Value;

    if(value.Unit == unit)
      res += unit;
    else if (value.Unit == 'C'){
      num = (num * (9 / 5)) + 32;
      res += 'F'
    }
    else if (value.Unit == 'F'){
      num = (num - 32) * (5 / 9);
      res += 'C'
    }

    return Math.round(num) + ' ' + res;
  }

}
