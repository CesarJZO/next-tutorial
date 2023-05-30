import React from 'react';

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    const headerStyle: React.CSSProperties = {
        width: '100%',
        backgroundColor: '#00aaff',
        display: 'flex',
        alignItems: 'center',
        padding: '10px 10px',
        color: '#fff',
        fontSize: '2em',
        fontWeight: 'bold',
        boxShadow: '0 2px 2px rgba(0, 0, 0, 0.2)',
        fontFamily: 'roboto',
        justifyContent: 'center',
    };

    return <div style={headerStyle}>{title}</div>;
}

export default Header;
