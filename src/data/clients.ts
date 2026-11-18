export type ClientLogo = {
	name: string;
	src: string;
	width: number;
	height: number;
};

/** Selected clients (full grid) — EuphoriaXR work. */
export const clientLogos: ClientLogo[] = [
	{ name: 'Ducati', src: '/clients/ducati.png', width: 640, height: 240 },
	{ name: 'Uber', src: '/clients/uber.png', width: 640, height: 240 },
	{ name: 'PepsiCo', src: '/clients/pepsico.png', width: 640, height: 240 },
	{ name: 'CES', src: '/clients/ces.png', width: 640, height: 240 },
	{ name: 'Qatar Airways', src: '/clients/qatar-airways.png', width: 640, height: 240 },
	{ name: 'Nestlé', src: '/clients/nestle.png', width: 640, height: 240 },
	{ name: 'NFL', src: '/clients/nfl.png', width: 640, height: 240 },
	{ name: 'Total', src: '/clients/total.png', width: 640, height: 240 },
	{ name: 'Silicon Labs', src: '/clients/silicon-labs.png', width: 640, height: 240 },
	{ name: 'Sanofi', src: '/clients/sanofi.png', width: 640, height: 240 },
	{ name: 'City of Austin Office of Innovation', src: '/clients/austin-innovation.png', width: 640, height: 240 },
	{ name: 'Indianapolis Motor Speedway', src: '/clients/indy-motor-speedway.png', width: 640, height: 240 },
];

/** Trusted by strip — user-supplied logos. */
export const trustedLogos: ClientLogo[] = [
	{ name: 'Microsoft', src: '/clients/trusted/microsoft.png', width: 245, height: 48 },
	{ name: 'Meta', src: '/clients/trusted/meta.png', width: 222, height: 68 },
	{ name: 'Medtronic', src: '/clients/trusted/medtronic.png', width: 254, height: 42 },
	{ name: 'NEOM', src: '/clients/trusted/neom.png', width: 129, height: 28 },
	{ name: 'Ulta Beauty', src: '/clients/trusted/ulta-beauty.png', width: 221, height: 90 },
	{ name: 'Toyota', src: '/clients/trusted/toyota.png', width: 512, height: 90 },
	{ name: 'Transfr', src: '/clients/trusted/transfr.png', width: 241, height: 61 },
	{ name: 'University of Alberta', src: '/clients/trusted/university-of-alberta.png', width: 309, height: 85 },
];

export const clientNames = clientLogos.map((item) => item.name);
