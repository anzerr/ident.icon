
export default class Identicon {

	constructor(hash: string, option?: {
		background?: [number, number, number],
		size?: number,
		saturation?: number,
		brightness?: number,
		image?: any
	});

	render(): any;

	toString(raw?: boolean): string;

}
export {};