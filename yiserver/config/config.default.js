'use strict';

module.exports = () => {
  const config = {
    sequelize: {
      dialect: 'mysql',
      database: 'lending',
      host: '192.168.146.128',
      port: '3306',
      username: 'root',
      password: 'cmdsh123456',
    },
    proxyworker: {
      port: 10086,
    },
    middleware: ['graphql'],
    security: {
      csrf: {
        ignore: () => true,
      },
    },
  };

  // should change to your own
  config.keys = 'egg-graphql';

  return config;
};
