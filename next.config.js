const withPWA = require("next-pwa")({
  dest: "public",
  skipWaiting: true,
  clientsClaim: true,
  disable: process.env.NODE_ENV === "development",
  reloadOnOnline:false,
  fallbacks:{
    image:'/disconnected.png'
  },
  cleanupOutdatedCaches:true
});
const nextConfigs = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.lorem.space",
        port: "",
        pathname: "/image/**",
      },
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "/**",
      },
    ],
  },
};
module.exports = withPWA(nextConfigs);