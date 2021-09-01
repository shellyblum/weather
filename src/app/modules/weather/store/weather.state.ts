export const weatherFeatureKey = 'weather';

export interface IWeatherState {
  coords: {
    Latitude: number,
    Longitude: number
  }
}

export const initialWeatherState: IWeatherState = {
  coords: {
    Latitude: 32.0599191,
    Longitude: 34.7851156
  }
};
