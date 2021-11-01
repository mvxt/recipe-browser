const path = require('path')

module.exports = {
  images: {
    domains: [
      'www.edamam.com'
    ]
  },
  webpack: (config, options) => {
    config.resolve.modules.push(path.resolve("./"));
    return config;
  }
};
