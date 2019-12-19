const packages = require('./package.json');
var exec = require('child_process').exec;

let install = 'npm install ';
let argument = process.argv[2];

// D = devDependencies, S = dependencies.
let dependencyFlag = (argument.indexOf('dev') > -1 ? 'D' : 'S');
let properties = Object.entries(packages[argument]);

global.console.log(`Updating ${argument}`);
for (let p of properties) {
  install += p[0] + '@latest ';
}
install += ` -${dependencyFlag}`;
global.console.log(install);

child = exec(install).stderr.pipe(process.stderr);
