/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn0.iconfinder.com",
                port: '',
                pathname: "/**"
            }
        ]
    }
}

module.exports = nextConfig
