const withPWA = require("next-pwa")({
  dest: "public",
  skipWaiting: true,
  clientsClaim: true,
  disable: process.env.NODE_ENV === "development",
  reloadOnOnline:false,
  fallbacks:{
    image:'/disconnected.png'
  }  
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
