const devConfig = {
  MONGO_URI: 'mongodb://localhost/mediumapi-dev',
};

const testConfig = {
  MONGO_URI: 'mongodb://localhost/mediumapi-test',
};

const prodConfig = {
  MONGO_URI: 'mongodb://localhost/mediumapi-prod',
};

const defaultConfig = {
  PORT: process.env.PORT || 3000,
};

function envConfig(env) {
  switch (env) {
    case 'development':
      return devConfig;
    case 'test':
      return testConfig;
    default:
      return prodConfig;
  }
}

export default {
  ...defaultConfig,
  ...envConfig(process.env.NODE_ENV),
};
