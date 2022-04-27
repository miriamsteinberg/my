const env = process.env;

const config = {
  devServer: {
    allowedHosts: [
      'http://localhost:3002'
    ]
  }
};

module.exports = config;