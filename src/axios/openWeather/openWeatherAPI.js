var axios = require('axios');
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&units=metric&APPID=53f9d8e4213222cf517d86dc406d67fc';
const OPEN_WEATHER_CIRCLE_URL = 'http://api.openweathermap.org/data/2.5/find?&cnt=5&cluster=no&units=metric&APPID=53f9d8e4213222cf517d86dc406d67fc';
module.exports = {
  getTemp: function (Lat,Long) {
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&lat=${Lat}&lon=${Long}`;
    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data;
      }
    }, function (res) {
      throw new Error(res.data.message);
    });
  },
  getCitiesInCircle: function (Lat,Long){
    var requestUrl = `${OPEN_WEATHER_CIRCLE_URL}&lat=${Lat}&lon=${Long}`;
    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod !== "200") {
        throw new Error(res.data.message);
      } else {
        return res.data;
      }
    }, function (res) {
      throw new Error(res.data.message);
    });
  }
}