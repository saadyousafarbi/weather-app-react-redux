import axios from 'axios';
import { projectConfig } from '../config';

const API_KEY = projectConfig.API_KEY;
const ROOT_URL = projectConfig.ROOT_URL;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

    const weatherForecastUrl = `${ROOT_URL}?q=${city}&APPID=${API_KEY}`;
    const request = axios.get(weatherForecastUrl);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}

