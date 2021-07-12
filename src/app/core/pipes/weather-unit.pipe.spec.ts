import { WeatherUnitPipe } from './weather-unit.pipe';

describe('WeatherUnitPipe', () => {
  it('create an instance', () => {
    const pipe = new WeatherUnitPipe();
    expect(pipe).toBeTruthy();
  });
});
