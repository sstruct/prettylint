#! /usr/bin/env node

const path = require('path');
const program = require('commander');

const lint = require('./lint.js');

program.version('1.0.0', '-v, --version');
program.option(
  '-S, --scope <scope>',
  'Project scope, node | react | rn',
  /^(node|react|rn)$/i,
  'node'
);
program.option(
  '-c, --config [path::String]',
  'Use custom configuration, overriding default .eslintrc.* config file'
);
program.option(
  '-N, --ignore-path [path:String]',
  'The ignore file to use instead of default .eslintignore.'
);
program.option('--no-fix', 'Disable automatically fix problems.');
program.parse(process.argv);

const configFile = getConfigFile(program);
const ignorePath = getIgnoreFile(program);
const cwd = process.cwd();
const files = program.args;
const fix = program.fix;

lint({ configFile, ignorePath, cwd, files, fix });

// Get config file path
function getConfigFile(argv) {
  if (argv.config) {
    return path.resolve(argv.config);
  }
  let configs = path.join(__dirname, '../configs/base.js');
  if (argv.scope === 'react') {
    configs = path.join(__dirname, '../configs/react.js');
  }
  if (argv.scope === 'rn') {
    configs = path.join(__dirname, '../configs/react-native.js');
  }
  return configs;
}

// Get ignore config file path
function getIgnoreFile(argv) {
  if (argv.ignorePath) {
    return path.resolve(argv.ignorePath);
  }
  return path.join(__dirname, '../.eslintignore');
}
