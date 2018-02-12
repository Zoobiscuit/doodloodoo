var axios = require('axios');
const UNSPLASH_API_URL = 'https://api.unsplash.com/search/photos/?page=1&per_page=5&client_id=6cae99c051328efab9f63d03e61b266adc40d254909eb5371edc8167986cdf61';
module.exports = {
    getPhotoBySearch: function (searchQuery) {
        let searchQueryStringified = JSON.stringify(searchQuery);
        let requestUrl = `${UNSPLASH_API_URL}&query=${searchQueryStringified}`;
        return axios.get(requestUrl).then(function (res) {
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return res.data;
            }
        }, function (res) {
            throw new Error(res);
        });
    }
}