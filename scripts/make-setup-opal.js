const shell = require('shelljs');
const fs = require('fs');

if (!fs.existsSync('./javascripts/setup-opal.js')) {
    shell.mkdir('-p', './javascripts');
    shell.cd('opal');
    const s = shell.cat('opal.min.js', 'config-opal.js', 'opal-parser.min.js', 'config-opal-parser.js');
    shell.cd('..');
    fs.writeFileSync('./javascripts/setup-opal.js', s.toString());
}