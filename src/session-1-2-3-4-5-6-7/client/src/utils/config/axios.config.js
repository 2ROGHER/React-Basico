import axios from 'axios';

// default config for AXIOS
export default axios.create(
    {
        baseURL: 'https://randomuser.me/api', // en el file axiosService le agregaamos un '/' para la peticion.
        responseType: 'json',
        timeout: 5000, // habra un a fallo si no hay respuesta en 5 segundos
        method: 'GET',
    }
)