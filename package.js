var fs = require('fs');
var path = require('path');
var os = require('os');
var archiver = require('archiver');
var chalk = require('chalk');

module.exports = function (packageName, sourceDir, targetDir, archiveType) {
  var archiveName = packageName + '.' + archiveType;
  var archiveFullName = path.join(os.tmpdir(), archiveName);
  var output = fs.createWriteStream(archiveFullName);
  var archive = archiver.create('zip');

  output.on('close', function () {
    var newName = path.join(targetDir, archiveName);
    fs.rename(archiveFullName, newName, function () {
      console.log(chalk.green('Archive successfully written to ' + newName));
    });
  });

  archive.on('error', function (err) {
    console.log(chalk.red('Error encountered while writing archive ' + archiveName));
    throw err;
  });

  archive.pipe(output);
  archive.directory(sourceDir, false);
  archive.finalize();
};
