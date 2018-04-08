import axios from 'axios';

const BASE_URL =
    window.location.href.indexOf('localhost') > -1 || window.location.href.indexOf('192') > -1
        ? 'http://192.168.0.101:8080'
        : 'https://thuis.danhnguyen.nl/domoticz';

export { getSunriseAPI, getDevicesAPI, getToggleAPI, getWeatherAPI, getLogAPI };

function getSunriseAPI() {
    const getSunriseAPI = `${BASE_URL}/json.htm?type=command&param=getSunRiseSet`;
    return axios.get(getSunriseAPI).then(response => response);
}

function getWeatherAPI() {
    const getWeatherAPI = `${BASE_URL}/json.htm?type=devices&filter=weather&used=true&order=Name`;
    return axios.get(getWeatherAPI).then(response => response);
}

function getDevicesAPI() {
    const devicesAPI = `${BASE_URL}/json.htm?type=devices&filter=all&used=true&order=Name`;
    return axios.get(devicesAPI).then(response => response);
}

function getToggleAPI(deviceId) {
    const toggleSwitchApi = `${BASE_URL}/json.htm?type=command&param=switchlight&idx=${deviceId}&switchcmd=Toggle`;
    return axios.get(toggleSwitchApi).then(response => response);
}

function getLogAPI() {
    const logApi = `${BASE_URL}/json.htm?type=command&param=getlog`;
    return axios.get(logApi).then(response => response);
}
