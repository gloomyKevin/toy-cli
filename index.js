#!/usr/bin/env node
console.log('cli test');

const program = require('commander')
// const helpOptions = require('./lib/core/help')

program.version('1.0.0')

// help & select info
// helpOptions()

// usually put the end
program.parse(process.argv)