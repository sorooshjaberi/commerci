const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
const withPWA = require("next-pwa")({
  dest: "public",
  skipWaiting: true,
  clientsClaim: true,
  cacheOnFrontEndNav: true,
  // globPatterns:["/pages/**"],
  runtimeCaching: [
    {
      urlPattern: /png|webp|jpg|jpeg|ico/,
      handler: "CacheFirst",
      options: { cacheName: "cf" },
    },
    {
      urlPattern: /js|jsx|json/,
      handler: "StaleWhileRevalidate",
      options: { cacheName: "swt" },
    },
  ],
  fallbacks:{
    document:"/offline"
  },
  
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

// const nextConfigs = (phase) => {
//   const imagesConfig = {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "api.lorem.space",
//         port: "",
//         pathname: "/image/**",
//       },
//       {
//         protocol: "https",
//         hostname: "**",
//         port: "",
//         pathname: "/**",
//       },
//     ],
//   };
//   if (phase === PHASE_DEVELOPMENT_SERVER) {
//     return {
//       images: imagesConfig,
//     };
//   } else {
//     return {
//       images: imagesConfig,
//     };
//   }
// };
