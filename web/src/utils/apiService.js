import axios from 'axios';
import config from './config';


const apiService = {
    getWeather: ({lat, lon}) => (
        axios.get(`${config.API_BASE_URL}${config.WEATHER_BY_CITY_GEO_URL}`,
            {
                auth: {
                    username: config.API_KEY
                },
                params: {
                    lat,
                    lon
                }
            })
    ),
    getWeatherByCityName: cityName => (
        axios.get(`${config.API_BASE_URL}${config.WEATHER_BY_CITY_NAME_URL}${cityName}`,
            {
                auth: {
                    username: config.API_KEY
                }
            })
    ),
    getForecast: cityName => (
        axios.get(`${config.API_BASE_URL}${config.WEATHER_FORECAST_BY_CITY_NAME_URL}${cityName}`,
            {
                auth: {
                    username: config.API_KEY
                }
            })
    )
};

export default apiService;