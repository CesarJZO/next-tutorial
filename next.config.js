/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        DEVICE_ID: process.env.DEVICE_ID,
        ACCESS_TOKEN: process.env.ACCESS_TOKEN,
    }
};

module.exports = nextConfig;