export const getAllUsers = async () => {

    let response = await fetch(`https://reqres.in/api/users`);
    console.log(`Response: ${response}`);
    console.log(`Status:  ${response.status}`);
    console.log(`Code: ${response.ok}`);
    // We return the json data
    return response.json();
};

export const getAllPageUsers = async (page) => {

    let response = await fetch(`https://reqres.in/api/users?page=${page}`);
    console.log(`Response: ${response}`);
    console.log(`Status:  ${response.status}`);
    console.log(`Code: ${response.ok}`);
    // We return the json data
    return response.json();
};

export const getUserDetails = async(id) => {
    let response = await fetch(`https://reqres.in/api/${id}`);
    console.log(`Response: ${response}`);
    console.log(`Status:  ${response.status}`);
    console.log(`Code: ${response.ok}`);
    // We return the json data
    return response.json();
};

export const login = async(email, password) => {

    let body = {
        email: email,
        password: password
    };
    let response = await fetch(`https://reqres.in/api/login`,{
        method: 'POST',
        mode:  'cors',
        credentials: 'omit',
        cache: false,
        headers: {
            'Content-type': 'application/json',
        },
        body: body,
    });

    return response.json();
};