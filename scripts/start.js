#!/usr/bin/env node
var path = require('path'),
   fs = require('fs'),
   extend = require('util')._extend,
   exec = require('child_process').exec,
   processes = [];

var baseDir = path.resolve(__dirname, '..'),
   chimpBin = path.resolve(baseDir, 'node_modules/.bin/chimp');

var chimpSwitches =
   ' --path=' + path.resolve(baseDir + '/features') +
  //  ' -r=' + path.resolve('tests/features/step_definitions/domain') +
  //  ' --criticalSteps=' + path.resolve('tests/features/step_definitions/critical') +
   ' --singleSnippetPerFile=1';

if (process.env.CUCUMBER_JSON_OUTPUT) {
  chimpSwitches += ' --jsonOutput=' + process.env.CUCUMBER_JSON_OUTPUT;
}

startChimp('--watch --browser=phantomjs');

function startChimp(command) {
  startProcess({
    name: 'Chimp',
    command: chimpBin + ' ' + command
  });
}

function startProcess(opts, callback) {
  var proc = exec(
     opts.command,
     opts.options
  );
  // if (opts.waitForMessage) {
  //   proc.stdout.on('data', function waitForMessage(data) {
  //     if (data.toString().match(opts.waitForMessage)) {
  //       if (callback) {
  //         callback();
  //       }
  //     }
  //   });
  // }
  // if (!opts.silent) {
  //   proc.stdout.pipe(process.stdout);
  //   proc.stderr.pipe(process.stderr);
  // }
  // if (opts.logFile) {
  //   var logStream = fs.createWriteStream(opts.logFile, {flags: 'a'});
  //   proc.stdout.pipe(logStream);
  //   proc.stderr.pipe(logStream);
  // }
  proc.on('close', function (code) {
    console.log(opts.name, 'exited with code ' + code);
    for (var i = 0; i < processes.length; i += 1) {
      processes[i].kill();
    }
    proc.exit(code);
  });

  proc.stdout.pipe(process.stdout);
  proc.stderr.pipe(process.stderr);

  processes.push(proc);
}
