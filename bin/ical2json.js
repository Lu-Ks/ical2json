#!/usr/bin/env node

/*
 * ical2json
 * https://github.com/adrianlee44/ical2json
 *
 * Copyright (c) 2013 Adrian Lee
 * Licensed under the MIT license.
 */

var path = require('path'),
    fs   = require('fs'),
    dir  = path.join(path.dirname(fs.realpathSync(__filename)), '../'),
    pkg  = require(dir + 'package.json'),
    commander = require('commander');

commander
  .version(pkg.version)
  .usage("[options] [FILES...]")
  .parse(process.argv);

  if (commander.args.length) {
    require(dir + 'index.js').run(commander);
  } else {
    console.log(commander.helpInformation());
  }
