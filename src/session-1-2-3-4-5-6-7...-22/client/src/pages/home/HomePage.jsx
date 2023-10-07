import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {

    const navigate = useNavigate();

    const navigateProps = (path) => {
        navigate.apply({
            pathname: path,
            search: '?online=true',
            state: {
                online: true,
            }
        })
    }
    return (
        <div>
            <h1>Home page</h1>
            <button onClick={() => navigateProps('/online-state')}>Go to State/props</button>
        </div>
    );
}

export default HomePage;
