/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    remotePatterns:[
      {
        protocol:"https",
        hostname:"cdn.fcglcdn.com",
        port:"",
        pathname:"**"
      },
      {
        protocol:"https",
        hostname:"upload.wikimedia.org",
        port:"",
        pathname:"**"
      }
    ]
  }
}

module.exports = nextConfig

//(https://upload.wikimedia.or