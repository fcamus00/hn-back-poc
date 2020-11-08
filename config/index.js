const fs = require('fs');

const env = process.env.NODE_ENV || 'local';

const configPath = `${__dirname}/config.${env}`;
if (!fs.existsSync(configPath) && !fs.existsSync(`${configPath}.js`)) {
  throw new Error(`the config file ${__dirname}/config.${env} was not found, set correctly the env variable NODE_ENV`);
}

const cfg = require(`./config.${env}`); // eslint-disable-line
let commonConfig = null;
commonConfig = cfg;
commonConfig.env = env;

module.exports = Object.freeze(commonConfig);
