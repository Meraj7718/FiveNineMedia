const path = require('path');

process.env.HOST = process.env.HOST || '0.0.0.0';
const entry = path.join(__dirname, 'build', 'server', 'index.js');
require(entry);