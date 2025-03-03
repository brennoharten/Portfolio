import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		container:{
			center:true,
			padding:"15px",
		},
		screens: {
			sm: "640px",
			md: "768px",
			lg: "960px",
			xl: "1200px",

		},
		fontFamily: {
			primary: "var(--font-jetbrainsMono)",

		},
		extend: {
			colors: {
				primary: "#1c1c22",
				accent: {
					DEFAULT: "#00ff99",  
					hover: "#00e187",  
				},
				background: "var(--background)",
				foreground: "var(--foreground)",
			},
			borderRadius: {
				/* lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)", */
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0"},
					to: { heigth: "var(--radix-accordion-content-heigth"}
				},
				"accordion-up": {
					from: { heigth: "var(--radix-accordion-content-heigth"},
					to: { height: "0"},
				}
			},
			animation: {
				"accordion-down" : "accordion-down 0.2s ease-out",
				"accordion-up" : "accordion-up 0.2s ease-out"
			}
		},
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
