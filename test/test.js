
const Identicon = require('./index.js'),
	fs = require('fs');

fs.writeFileSync('example.svg', new Identicon('4p545hcpzgzkbb46u9rfhqsimgnu6sjb1ao47d5ywj63o31ru9cf5msb1tg', 420).toString(true));
