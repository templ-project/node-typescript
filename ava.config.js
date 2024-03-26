// ava.config.js

const files = ['./test.ava/**/*.test.ts'];

const environmentVariables = {};

module.exports = {
  babel: {
    extensions: ['ts'],
    testOptions: {
      babelrc: true,
    },
  },
  extensions: ['ts'],
  require: ['ts-node/register'],
  files,
  environmentVariables,
};
