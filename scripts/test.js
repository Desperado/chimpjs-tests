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
       '--browser=phantomjs',
       '--singleSnippetPerFile=1',
       '--jsonOutput=cucumber/chimpTests.cucumber'
      //  '--saveScreenshots=true',
      //  '--attachScreenshotsToReport=true',
      //  '--format=json'
      //  '--screenshotsOnError=true'
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
  // var exitAfterBuild = function exitAfterBuild(line) {
  //   if (line.indexOf('steps') !== -1) {
  //     childProcess.kill('SIGINT');
  //     console.log('Finished running chimp');
  //   } else if (
  //      line.indexOf('failed to start') !== -1) {
  //     childProcess.kill('SIGINT');
  //     console.error('phantomJS failed to start, build failed');
  //     throw new Error(line);
  //   }
  // };
  // childProcess.stdout.on('data', exitAfterBuild);
  // childProcess.stderr.on('data', exitAfterBuild);
// }


// childProcess.on('close', function (code) {
//     if (code > 0) {
//       console.log('ChimpJs exited with code ' + code);
//       childProcess.exit(code);
//     } else {
//       callback();
//     }
//   });

childProcess.on('close', function (code) {
  console.log('chimpJS exited with code ' + code);
  for (var i = 0; i < childProcess.length; i += 1) {
    childProcess[i].kill();
  }
  childProcess.exit(code);
});
}
