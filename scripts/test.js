#!/usr/bin/env node
var path = require('path'),
   extend = require('util')._extend,
   spawn = require('child_process').spawn;

var baseDir = path.resolve(__dirname, '..');

runChimp();

function runChimp() {
  console.log('Running chimpJS');
  var childProcess = spawn('chimp',
     [
       '--watch',
       '--browser=phantomjs',
       '--singleSnippetPerFile=1',
       '--jsonOutput=cucumber/chimpTests.json',
       '--saveScreenshots=true',
       '--attachScreenshotsToReport=true',
       '--screenshotsOnError=true'
     ]
  );
  childProcess.stdout.setEncoding('utf8');
  childProcess.stderr.setEncoding('utf8');
  childProcess.stdout.on('data', function (line) {
    process.stdout.write(line);
  });
  childProcess.stderr.on('data', function (line) {
    process.stderr.write(line);
  });
  var exitAfterBuild = function exitAfterBuild(line) {
    if (line.indexOf('steps') !== -1) {
      childProcess.kill('SIGINT');
      console.log('Finished running chimp');
    } else if (
       line.indexOf('chimp has exited with') !== -1) {
      childProcess.kill('SIGINT');
      console.error('There were issues whilst running chimp');
      throw new Error(line);
    }
  };
  childProcess.stdout.on('data', exitAfterBuild);
  childProcess.stderr.on('data', exitAfterBuild);
}
