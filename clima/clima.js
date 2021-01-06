const axios = require('axios');

const getClima = async(lat, lon) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=aff8e4fe2154be246f84d15bda59de6f&units=metric`);

    if (resp.data.length === 0) {
        throw new Error(`No se pudo obtener el clima para la dirección: ${direction}`);
    }

    return resp.data.main.temp;
};

module.exports = {
    getClima
}