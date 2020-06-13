#!/usr/bin/env node

const { readFileSync } = require('fs')
const { resolve } = require('path')

process.on('unhandledRejection', (reason, promise) => {
	console.log('Unhandled Rejection at: Promise ', promise, ' reason: ', reason)
	throw reason;
})

try {
  const changelogFile = readFileSync(resolve(process.cwd(), 'CHANGELOG.md'))

  require('./index')(changelogFile.toString())
} catch (e) {
  if (e.code === 'ENOENT') {
    console.error('Error: Could not find CHANGELOG.md file in', process.cwd())
  } else {
    process.stderr.write(e)
  }

  process.exit(1)
}
