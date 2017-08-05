/**
 * Abstração do método fetch
 * @param url
 * @param method
 * @param headers
 * @returns {Promise|Promise.<TResult>|*}
 */
const request = ({url, method, headers}) => {

    const data = {
        method,
        headers
    };

    return fetch(url, data).then(response => response.json());
};

export default request;