module.exports = {
  images: {
    sources: [
      {
        type: 'remote',
        url: 'https://api.lorem.space/image/fashion?w={width}&h={height}&r={random}',
        sizes: {
          width: [640, 1200],
          height: [480, 1000],
          random: [100, 999],
        },
      },
    ],
  },
};