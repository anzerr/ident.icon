
class Svg {

	constructor(size, foreground, background) {
		this.size = size;
		this.foreground = foreground;
		this.background = background;
		this.rect = [];
	}

	add(x, y, w, h, color) {
		this.rect.push({x: x, y: y, w: w, h: h, color: color});
	}

	color(r, g, b, a) {
		let values = [r, g, b].map(Math.round);
		values.push((a >= 0) && (a <= 255) ? a / 255 : 1);
		return 'rgba(' + values.join(',') + ')';
	}

	toString() {
		const bg = this.color(...this.background), fg = this.color(...this.foreground);

		let xml = `<svg xmlns='http://www.w3.org/2000/svg' width='${this.size}' height='${this.size}' style='background-color:${bg};'>` +
				`<g style='fill:${fg}; stroke:${fg}; stroke-width:${this.size * 0.005};'>`;

		for (let i in this.rect) {
			if (this.rect[i].color !== this.background) {
				let r = this.rect[i];
				xml += `<rect x='${r.x}' y='${r.y}' width='${r.w}' height='${r.h}'/>`;
			}
		}
		return `${xml}</g></svg>`;
	}

	toBase64() {
		return Buffer.from(this.toString()).toString('base64');
	}

}

module.exports = Svg;
