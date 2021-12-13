#!/usr/bin/env node

const program = require('commander')
const helpOptions = require('./lib/core/help')
const createCommands = require('./lib/core/create')

program.version(require('./package.json').version)

// add help & select info
helpOptions()

// add other create commands
createCommands()

// usually put the end
program.parse(process.argv)