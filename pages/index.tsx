import React from 'react';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';

const MyPage = () => {
    const homeStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0 10px',
    };

    return (
        <div style={homeStyle}>
            <Header title="Particle Security" />
            <Dashboard />
        </div>
    );
}

export default MyPage;
