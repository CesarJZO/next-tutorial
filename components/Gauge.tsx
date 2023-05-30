import React, { useEffect, useRef } from 'react';

interface GaugeProps {
    value: number;
    min: number;
    max: number;
    label: string;
    color?: string;
    units?: string;
}

const Gauge: React.FC<GaugeProps> = ({ value, min, max, label, color, units }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;

        const context = canvas.getContext('2d');

        if (!context) return;

        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = centerX - 10;
        const startAngle = Math.PI * 0.75;
        const endAngle = Math.PI * 2.25;
        const valueAngle = startAngle +((value - min) / (max - min)) * (endAngle - startAngle);
        const valuePercent = ((value - min) / (max - min)) * 100;

        // Draw background arc
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.beginPath();
        context.arc(centerX, centerY, radius, startAngle, endAngle);
        // Rounded corners
        context.lineCap = 'round';
        context.lineWidth = 15;
        context.strokeStyle = '#ccc';
        context.stroke();

        // Draw value arc
        context.font = '20px Roboto';
        context.fillStyle = '#000';
        context.textAlign = 'center';
        context.fillText(`${value.toFixed(0)}${units ? units : ""}`, centerX, centerY + 10);

        // Draw filled arc
        context.beginPath();
        context.arc(centerX, centerY, radius, startAngle, valueAngle);
        context.lineWidth = 10;
        context.strokeStyle = color || '#00aaff';
        context.stroke();

    }, [value, min, max]);

    const labelStyle: React.CSSProperties = {
        fontSize: '20px',
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        textAlign: 'center',
    };

    return (
        <div>
            <canvas ref={canvasRef} width={200} height={200}></canvas>
            <div style={labelStyle}>{label}</div>
        </div>
    );
};

export default Gauge;
