import axios from 'axios';

export { getWeatherTodayAPI, getWeatherForecastAPI };

function getWeatherTodayAPI() {
    const APIXU_API_KEY = '';
    const APIXU_LOC = 'Rotterdam';
    const APIXU_API = `//api.apixu.com/v1/forecast.json?key=${APIXU_API_KEY}&q=${APIXU_LOC}`;
    const APIXU_FORECAST_TODAY = APIXU_API;

    return axios.get(APIXU_FORECAST_TODAY).then(response => response);
}

function getWeatherForecastAPI() {
    const APIXU_API_KEY = '';
    const APIXU_LOC = 'Rotterdam';
    const APIXU_API = `//api.apixu.com/v1/forecast.json?key=${APIXU_API_KEY}&q=${APIXU_LOC}`;
    const APIXU_FORECAST = `${APIXU_API}&days=5`;

    return axios.get(APIXU_FORECAST).then(response => response);
}
