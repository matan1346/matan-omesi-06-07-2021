
export interface WeatherDetails{
  ID: string;
  title: string;
  countryName: string;
  cityName: string;
  degrees: string;
  description?: string;
}


export type FavoriteWeather = WeatherDetails;
