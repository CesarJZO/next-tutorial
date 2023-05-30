import React, { useState } from 'react';

async function callParticle(status: number) {
    const deviceId = process.env.DEVICE_ID;
    const accessToken = process.env.ACCESS_TOKEN;
    const baseUrl = "https://api.particle.io/v1/devices";

    /* const response = */ await fetch(`${baseUrl}/${deviceId}/setHayGente`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
        body: `params=${status}`,
    });

    // const data = await response.json();
    // console.log(data);
}

const Toggle: React.FC = () => {
    const [isOn, setIsOn] = useState(false);

    const toggleStyle: React.CSSProperties = {
        width: '90%',
        backgroundColor: isOn ? 'green' : 'red',
        display: 'flex',
        alignItems: 'center',
        padding: '10px 10px',
        color: '#fff',
        fontSize: '2em',
        fontWeight: 'bold',
        boxShadow: '0 2px 2px rgba(0, 0, 0, 0.2)',
        fontFamily: 'roboto',
        borderRadius: '0.25em',
        justifyContent: 'center',
    };

    const toggle = () => {
        setIsOn(!isOn);
        callParticle(isOn ? 0 : 1);
    };

    return (
        <button style={toggleStyle} onClick={toggle}>
            {isOn ? 'En casa' : 'Afuera'}
        </button>
    );
}

export default Toggle;
