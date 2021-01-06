const axios = require('axios');

const getLugarLatLng = async(direction) => {

    const encodeURL = encodeURI(direction);

    const instance = axios.create({
        baseURL: `https://weatherapi-com.p.rapidapi.com/current.json?q=${encodeURL}`,
        //timeout: 1000,
        headers: {
            'X-RapidAPI-Key': 'f5a5a7243amsh4c36fa86665e5b5p1ee2b1jsn3cdb45cb34b7',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
            'useQueryString': true
        }
    });

    const resp = await instance.get();

    /*if (resp.data.length === 0) {
        console.log('Error LUGAR');
        throw new Error(`No se pudo obtener información para la dirección: ${direction}`);
    }*/

    const data = resp.data.location;

    const direccion = data.name;
    const latitud = data.lat;
    const longitud = data.lon;

    /*instance.get()
        .then(resp => {
            console.log(resp.data.location);
        })
        .catch(err => {
            console.log('Error', err);
        });*/

    return {
        direccion,
        latitud,
        longitud
    };
};

module.exports = {
    getLugarLatLng
};