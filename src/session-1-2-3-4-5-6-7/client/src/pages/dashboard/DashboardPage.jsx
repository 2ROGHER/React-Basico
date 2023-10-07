import React from 'react';
import Button from '@mui/material/Button';
import CopyRight from '../../components/pure/CopyRight';
import { useNavigate } from 'react-router-dom';

const DashboardPage = () => {

    const navigate = useNavigate();

    const logout = () => {
        navigate('/login');
    };
    return (
        <div>
            <CopyRight/>
        </div>
    );
}

export default DashboardPage;
