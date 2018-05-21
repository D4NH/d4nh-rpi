import axios from 'axios';

export { getDSMRAPI };

function getDSMRAPI(TYPE = 'consumption', CATEGORY = 'today', PARAM = '') {
    const BASE_URL =
        window.location.href.indexOf('localhost') > -1 || window.location.href.indexOf('192') > -1
            ? 'http://192.168.0.120'
            : 'https://thuis.danhnguyen.nl/dsmr';

    const DSMRApi = `${BASE_URL}/api/v2/${TYPE}/${CATEGORY}${PARAM}`;
    return axios({
        method: 'get',
        url: DSMRApi,
        headers: {
            'X-AUTHKEY': ''
        }
    }).then(response => response.data);
}
