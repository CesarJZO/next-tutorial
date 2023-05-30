import React, { useState, useEffect } from 'react';

const Gauge = ({ value, min, max, width, height }) => {
    const [animatedValue, setAnimatedValue] = useState(value);

    useEffect(() => {
        setAnimatedValue(value);
    }, [value]);

    const percent = ((animatedValue - min) / (max - min)) * 100;

    const gaugeStyle = {
        width: `${width}px`,
        height: `${height}px`,
        border: '1px solid #000',
        borderRadius: '1em',
        boxShadow: '2px 2px rgba(0, 0, 0, 0.2)',
        position: 'relative',
        overflow: 'hidden'
    };

    const fillStyle = {
        width: `${percent}%`,
        height: '100%',
        backgroundColor: '#00aaff',
        position: 'absolute',
        top: '0',
        left: '0'
    };

    return (
        <div style={gaugeStyle}>
            <div style={fillStyle}></div>
        </div>
    );
};

export default Gauge;
