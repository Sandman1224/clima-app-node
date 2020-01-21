const axios = require('axios');

const getClima = async ( lat, lng ) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=2402c33b923bbf825709215965e361d2&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}