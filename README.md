
### `Intro`
![GitHub Actions status | linter](https://github.com/anzerr/ident.icon/workflows/linter/badge.svg)
![GitHub Actions status | publish](https://github.com/anzerr/ident.icon/workflows/publish/badge.svg)
![GitHub Actions status | test](https://github.com/anzerr/ident.icon/workflows/test/badge.svg)

generate github styled identicon in svg format for a given hash.

#### `Install`
``` bash
npm install --save git+https://git@github.com/anzerr/ident.icon.git
npm install --save @anzerr/net.socket
```

### `Example`
``` javascript
const Identicon = require('ident.icon'),
	fs = require('fs');

fs.writeFileSync('example.svg', new Identicon('4p545hcpzgzkbb46u9rfhqsimgnu6sjb1ao47d5ywj63o31ru9cf5msb1tg', 420).toString(true));
```