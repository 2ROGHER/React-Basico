import axios from 'axios';

/**
 * login method to ReqRes endpoint
 * @param {string} email 
 * @param {string} password 
 */

export const login = (email, password) => {

    let body = {
        email,
        password
    };

    return axios.post('https://reqres.in/api/login', body)
};

// Obtain all Users 
export const getAllUsers = () => {
    return axios.get('https://reqres.in/api/');
}

// Obtain all paged users
export const getAllPagedUsers = (page) => {
    return axios.get(`https://reqres.in/api/users?page=${page}`);
}
// Obtain user by id
export const getUserById = (id) => {
    return axios.get(`https://reqres.in/api/users/${id}`);
}

// Create user
export const createUser = (name,job) =>{
    let body = {
        name: name,
        job: job,
    }

    return axios.post('https://reqres.in/api/users', body);
};

// TODO: updtate user
// TODO: delete user