
const Svg = require('./src/svg.js'),
	{hsl} = require('color.util'),
	is = require('type.util');

class Identicon {

	constructor(hash, option) {
		if (!is.string(hash) || hash.length < 15) {
			throw new Error('A hash of at least 15 characters is required.');
		}
		this.option = {
			background: [240, 240, 240, 255],
			margin: 0.08,
			size: 64,
			saturation: 0.7,
			brightness: 0.5,
			image: Svg,
			...option
		};
		this.hash = hash;
		this.option.foreground = this.option.foreground || hsl(
			parseInt(this.hash.substr(-7), 16) / 0xfffffff,
			this.option.saturation,
			this.option.brightness
		).toRgb();
	}

	image() {
		const I = this.option.image;
		return new I(this.option.size, this.option.foreground, this.option.background);
	}

	render() {
		let image = this.image(),
			size = this.option.size,
			baseMargin = Math.floor(size * this.option.margin),
			cell = Math.floor((size - (baseMargin * 2)) / 5),
			margin = Math.floor((size - cell * 5) / 2);

		for (let i = 0; i < 15; i++) {
			let color = this.option[parseInt(this.hash.charAt(i), 16) % 2 ? 'background' : 'foreground'];
			if (i < 5) {
				image.add(2 * cell + margin, i * cell + margin, cell, cell, color);
			} else if (i < 10) {
				image.add(cell + margin, (i - 5) * cell + margin, cell, cell, color);
				image.add(3 * cell + margin, (i - 5) * cell + margin, cell, cell, color);
			} else if (i < 15) {
				image.add(0 * cell + margin, (i - 10) * cell + margin, cell, cell, color);
				image.add(4 * cell + margin, (i - 10) * cell + margin, cell, cell, color);
			}
		}

		return image;
	}

	toString(raw) {
		return this.render()[(raw) ? 'toString' : 'toBase64']();
	}

}

module.exports = Identicon;
