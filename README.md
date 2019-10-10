
### `Intro`
![GitHub Actions status | linter](https://github.com/anzerr/ident.icon/workflows/linter/badge.svg)
![GitHub Actions status | publish](https://github.com/anzerr/ident.icon/workflows/publish/badge.svg)
![GitHub Actions status | test](https://github.com/anzerr/ident.icon/workflows/test/badge.svg)

generate github styled identicon in svg format for a given hash.

#### `Install`
``` bash
npm install --save git+https://git@github.com/anzerr/ident.icon.git
npm install --save @anzerr/ident.icon
```

### `Example`
An online can be found [here](https://anzerr.github.io/demo/#ident)
``` javascript
const Identicon = require('ident.icon'),
	fs = require('fs');

fs.writeFileSync('example.svg', new Identicon('e3d7bb56cd6a33ed').toString(true));
```