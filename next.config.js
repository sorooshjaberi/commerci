// module.exports = {
//   images: {
//     module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'api.lorem.space',
//         port: '',
//         pathname: '/image/fashion?w=640&h=480&r=748',
//       },
//     ],
//   },
// };
//     // domais:['api.lorem.space']
//     // sources: [
//     //   {
//     //     type: "remote",
//     //     url: "https://api.lorem.space/image/fashion?w={width}&h={height}&r={random}",
//     //     sizes: {
//     //       width: [0, +Infinity],
//     //       height: [0, +Infinity],
//     //       random: [0, Infinity],
//     //     },
//     //   },
//     // ],
//     // remotePatterns: [
//     //   {
//     //     protocol: "https",
//     //     hostname: "**",

//     //   },
//     // ],
//   },
// };
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
};