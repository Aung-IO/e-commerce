/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
                
            },
            {
                protocol: 'https',
                hostname: 'unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'iad.microlink.io'
            }
        ]
    },
};


export default nextConfig;
