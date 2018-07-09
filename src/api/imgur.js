import qs from 'qs';
import * as config from '../../.config';

const ROOT_URL = 'https://api.imgur.com';

export default {
    login() {
        const querystring = {
            client_id: config.IMGUR_CLIENT_ID,
            response_type: 'token'
        };
        window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(querystring)}`;
    }
};