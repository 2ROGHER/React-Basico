import APIRequest from '../utils/config/axios.config'; // esta la configuracion en concreta.





export default function getRandomUser() {
    return APIRequest.get('/', {
        validateStatus: function(status){
            return status < 500; // se hace validaciones con el estado 500
        }
    }); // Nos retorna la respusta directamente de 'https://randomuser.me/api/
};