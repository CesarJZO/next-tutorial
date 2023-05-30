import React from 'react';
import Gauge from './Gauge';
import Toggle from './Toggle';

/**
 * @returns A dashboard with two gauges and a toggle button
 */
const Dashboard = () => {
    const containerStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '10px',
    };

    const gaugesDashboardStyle: React.CSSProperties = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridGap: '10px',
        padding: '10px',
        margin: '15px',
        alignItems: 'center',
        justifyItems: 'center',
    };

    const [temperature, setTemperature] = React.useState(0);
    const [humidity, setHumidity] = React.useState(0);

    const deviceId = process.env.DEVICE_ID;
    const accessToken = process.env.ACCESS_TOKEN;

    const baseUrl = "https://api.particle.io/v1/devices";

    React.useEffect(() => {
        const interval = setInterval(async () => {
            const response = await fetch(`${baseUrl}/${deviceId}/temperatura?access_token=${accessToken}`);
            const data = await response.json();
            // get two decimals from result
            const result = Math.round(data.result * 100) / 100;
            setTemperature(result);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    React.useEffect(() => {
        const interval = setInterval(async () => {
            const response = await fetch(`${baseUrl}/${deviceId}/humedad?access_token=${accessToken}`);
            const data = await response.json();
            // get two decimals from result
            const result = Math.round(data.result * 100) / 100;
            setHumidity(result);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div style={containerStyle}>
            <div style={gaugesDashboardStyle}>
                <Gauge value={temperature} min={0} max={100} label="Temperatura" />
                <Gauge value={humidity} min={0} max={100} label="Humedad" units='%' />
            </div>
            <Toggle />
        </div>
    );
}

export default Dashboard;

