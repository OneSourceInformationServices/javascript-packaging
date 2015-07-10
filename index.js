#!/usr/bin/env node

var cmd = require('commander');
var package = require('./package');
var pkgDef = require('./package.json');

cmd
  .version(pkgDef.version)
  .option('-n, --name <archive name>', 'The name of archive')
  .option('-src, --source-path <path>', 'The root directory to package')
  .option('-out, --output-path <path>', 'The output path where the archive is written')
  .option('-t, --type [archiveType]', 'The type of the archive', /^(jar|war|zip)$/i, 'jar')
  .parse(process.argv);

package(cmd.name, cmd.sourcePath, cmd.outputPath, cmd.type);
