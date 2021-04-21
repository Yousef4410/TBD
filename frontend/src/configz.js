const configs = {
  development: {
    SERVER_URI: 'http://localhost:5000',
  },
  production: {
    SERVER_URI: 'https://cop4331-app.herokuapp.com/',
  },
};

module.exports.config = configs[process.env.NODE_ENV];