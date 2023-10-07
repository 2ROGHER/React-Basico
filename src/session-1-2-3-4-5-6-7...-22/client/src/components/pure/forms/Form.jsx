import React, {useState} from 'react';

const Form = () => {
    const [credentials, setCredential] = useState({
        email: '',
        password: '',
    });
    return (
        <div>
            <input type="text" name="email" value={credentials.email} />
            <input type="password" name='password' value={credentials.password} />
        </div>
    );
}

export default Form;
