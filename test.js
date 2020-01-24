
const Identicon = require('./index.js'),
	hash = require('fs.hash'),
	assert = require('assert'),
	fs = require('fs.promisify');

const raw = new Identicon('4p545hcpzgzkbb46u9rfhqsimgnu6sjb').toString(true);
fs.writeFile('example.svg', raw).then(() => {
	return hash('example.svg');
}).then((res) => {
	assert.equal(res, '45f330fe8fca816d92b527a38aea984ba94bc12148bdbf94d6a61546c17543ba');
}).catch((err) => {
	console.log(err);
	process.exit(1);
});
