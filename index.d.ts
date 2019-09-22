
declare namespace ident {

	class Identicon {

		public socket: any;
		public compress: boolean;

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

}

export as namespace ident;
export = ident;