#!/usr/bin/env node

const { readFileSync } = require('fs')
const { resolve } = require('path')

try {
  const changelogFile = readFileSync(resolve(process.cwd(), 'CHANsGELOG.md'))

  require('./index')(changelogFile.toString())
} catch (e) {
  if (e.code === 'ENOENT') {
    console.error('Error: Could not find CHANGELOG.md file')
  }

  process.stderr.write()
  process.exit(1)
}

process.on('unhandledRejection', (reason, promise) => {
	console.log('Unhandled Rejection at: Promise ', promise, ' reason: ', reason);
	throw reason;
});
