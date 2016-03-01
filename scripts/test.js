#!/usr/bin/env node
var path = require('path'),
   extend = require('util')._extend,
   exec = require('child_process').exec;

// var baseDir = path.resolve(__dirname, '..');
  //  chimpScript = path.resolve(__dirname, 'start.js');

runTests();

function runTests() {
  console.log('run test has run');
  runChimp(function () {
    console.log('Yay!');
  });
}

function runChimp(callback) {
  console.log('run chimp has run');
  startProcess({
    name: 'Chimp',
    // options: {
    //   env: extend({CI: 1}, process.env)
    // },
    command: 'chimp --watch --browser=phantomjs --singleSnippetPerFile=1'
  }, callback);
}

function startProcess(opts, callback) {
console.log('start process has run');
  var proc = exec(
     opts.command
    //  opts.options
  );
  proc.stdout.pipe(process.stdout);
  proc.stderr.pipe(process.stderr);
  // proc.stdout.on('data', function(data) {
  //   if (/steps/.test(data)) {
  //     proc.kill('SIGHUP');
  //   }
  // });
  proc.on('close', function (code, signal) {
    if (code > 0) {
      console.log(opts.name, 'exited with code ' + code);
      proc.exit(code);
    }
    else {
      proc.exit(code);
      console.log('all tests passed');
    }
  });
  // proc.on('error', function(code, signal) {
  //   console.log(arguments);
  // });
  // console.log('finsihed without close');
  // callback();
}
