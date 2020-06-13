#!/usr/bin/env node

const { readFileSync } = require('fs')
const { resolve } = require('path')

const changelogFile = readFileSync(resolve(process.cwd(), 'CHANGELOG.md'))

require('./index')(changelogFile.toString())
