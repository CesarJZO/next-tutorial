import React, { useState } from 'react';

const Toggle: React.FC = () => {
    const [isOn, setIsOn] = useState(false);

    const toggleStyle: React.CSSProperties = {
        width: '100%',
        backgroundColor: isOn ? 'green' : 'red',
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

    const toggle = () => {
        setIsOn(!isOn);
    };

    return (
        <button style={toggleStyle} onClick={toggle}>
            {isOn ? 'ON' : 'OFF'}
        </button>
    );
}

export default Toggle;
