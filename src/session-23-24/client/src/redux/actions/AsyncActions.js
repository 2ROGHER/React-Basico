// estas son acciones qeu se van a despachar en tareas asincrnoas
// Async Action Types
export const API_CALL_REQUEST = 'API_CALL_REQUEST';
export const API_CALL_SUCCESS = 'API_CALL_SUCCESS';
export const API_CALL_FAILURE = 'API_CALL_FAILURE';


export const login = (email, password) => {
    return {
        type: API_CALL_REQUEST,
        payload: {
           request: {
                method: 'POST',
                url: 'https://reqres.in/api/login',
                // en le payload podemos hacer lo que quisieramos
                // en ese caos es la confi del axios.
                data: {
                    email: email,
                    password: password,
                },
                okAction: API_CALL_SUCCESS,
                failAction: API_CALL_FAILURE,
           }
        }
    }
};

// Generic httpReques action   dispatcher.
export const httpRequest = (method, url, data) => {
    return {
        type: method,
        payload: {
            request: {
                method: 'POST',
                url: url,
                data,
                okAction: API_CALL_SUCCESS,
                failAction: API_CALL_FAILURE,
            }
            
        }
    }
}
