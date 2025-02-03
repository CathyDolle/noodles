import localFont from "next/font/local";


export const iowan = localFont({
	src: [
		{
			path: './Iowan.woff2',
			weight: 'normal',
			style: 'normal',
		},
	],
	variable: '--font-iowan',
	fallback: ['serif'],
})
