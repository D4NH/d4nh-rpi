import axios from 'axios';

export { getDSMRAPI };

function getDSMRAPI() {
    const BASE_URL =
        window.location.href.indexOf('localhost') > -1 || window.location.href.indexOf('192') > -1
            ? 'http://192.168.0.120'
            : 'https://thuis.danhnguyen.nl/dsmr';

    const DSMRApi = `${BASE_URL}/api/v2/consumption/today`;
    return axios({
        method: 'get',
        url: DSMRApi,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'X-AUTHKEY': ''
        }
    }).then(response => response.data);
}
