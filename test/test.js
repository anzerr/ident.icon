
const Identicon = require('./index.js'),
	fs = require('fs');

fs.writeFileSync('example.svg', new Identicon('4p545hcpzgzkbb46u9rfhqsimgnu6sjb', 420).toString(true));
