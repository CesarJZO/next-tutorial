import React from 'react';

const Gauge = ({ value, min, max, label }) => {
    const [animatedValue, setAnimatedValue] = React.useState(value);

    React.useEffect(() => {
        setAnimatedValue(value);
    }, [value]);

    const containerStyle: React.CSSProperties = {
        width: '200px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const percent = ((animatedValue - min) / (max - min)) * 100;

    const gaugeStyle: React.CSSProperties = {
        width: "100%",
        height: "30px",
        border: '1px solid #000',
        borderRadius: '1em',
        boxShadow: '2px 2px rgba(0, 0, 0, 0.2)',
        position: 'relative',
        overflow: 'hidden',
        // Position this below header
        marginTop: '15px'
    };

    const fillStyle: React.CSSProperties = {
        width: `${percent}%`,
        height: '100%',
        backgroundColor: '#00aaff',
        position: 'absolute',
        top: '0',
        left: '0',
    };

    const labelContainerStyle: React.CSSProperties = {
        width: '200px',
    };

    /* place label below gauge */
    const labelStyle: React.CSSProperties = {
        marginTop: '5px',
        textAlign: 'center',
        fontFamily: 'roboto',
        fontWeight: 'bold',
    };

    return (
        <div style={containerStyle}>
            <div style={gaugeStyle}>
                <div style={fillStyle}></div>
            </div>
            <div style={labelContainerStyle}>
                <div style={labelStyle}>{`${label} ${value}%`}</div>
            </div>
        </div>
    );
};

export default Gauge;
