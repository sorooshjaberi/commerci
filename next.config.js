module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.lorem.space',
        port: '',
        pathname: '/image/**',
      },
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '/**',
      },
    ],
  },
  env:{
    NEXTAUTH_SECRET:"AhIgspa1zpus/bTJtT49v4Il5XwcWh2vW1Hxp0mWxQc="
  }
};