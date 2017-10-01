import config from 'utils/config';
import fetch from 'isomorphic-unfetch';

export const authenticateAsApplication = () => {
    return fetch(`${config.apiUrl}?client_id=${config.clientId}&client_secret=${config.clientSecret}&grant_type=client_credentials`);
};