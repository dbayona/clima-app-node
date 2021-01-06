//const axios = require('axios');
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: "d",
        desc: "Descripcion de la ciudad para obtener el clima",
        demand: true
    }
}).argv;

//console.log(argv.direccion);

//lugar.getLugarLatLng(argv.direccion)
//    .then(console.log);

/*clima.getClima(40.71, -74.01)
    .then(console.log)
    .catch(console.log);*/

const getInfo = async(direccion) => {

    try {

        const lugarInfo = await lugar.getLugarLatLng(direccion);

        const climaInfo = await clima.getClima(lugarInfo.latitud, lugarInfo.longitud);

        return `El clima de ${argv.direccion} es de ${climaInfo}`;
    } catch (e) {
        return `No se pudo determinar el clima para: ${direccion}`;
    }
};

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);