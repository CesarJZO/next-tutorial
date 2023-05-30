import React from 'react';
import Gauge from './Gauge';

const Dashboard = () => {
    // layout that contains 4 gauges aligned in a 2x2 grid
    const dashboardStyle: React.CSSProperties = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '1fr 1fr',
        gridGap: '10px',
        padding: '10px',
        alignItems: 'center',
        justifyItems: 'center',
    };

    // read temperature from handler
    const [temperature, setTemperature] = React.useState(0);

    const deviceId = "2f002e001847393035313137";
    const accessToken = "7cde93be363b335f1e49b99baeb8f73311f71a53";

    const url = `https://api.particle.io/v1/devices/${deviceId}/temperatura?access_token=${accessToken}`

    React.useEffect(() => {
        const interval = setInterval(async () => {
            const response = await fetch(url);
            const data = await response.json();
            // get two decimals from result
            const result = Math.round(data.result * 100) / 100;
            setTemperature(result);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div style={dashboardStyle}>
            <Gauge value={temperature} min={0} max={100} width={200} height={150} label="Temperature" />
            <Gauge value={50} min={0} max={100} width={200} height={150} label="Humidity" />
            <Gauge value={50} min={0} max={100} width={200} height={150} label="Pressure" />
            <Gauge value={50} min={0} max={100} width={200} height={150} label="Wind Speed" />
        </div>
    );
}

export default Dashboard;

