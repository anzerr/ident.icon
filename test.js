
const Identicon = require('./index.js'),
	hash = require('fs.hash'),
	assert = require('assert'),
	fs = require('fs.promisify');

const raw = new Identicon('4p545hcpzgzkbb46u9rfhqsimgnu6sjb').toString(true);
fs.writeFile('example.svg', raw).then(() => {
	return hash('example.svg');
}).then((res) => {
	assert.equal(res, '42586916a732d7f9b9e3fffe16d797df96ac5925ab3aa5adc00fa88789529665');
}).catch((err) => {
	console.log(err);
	process.exit(1);
});
