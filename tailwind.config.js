/** @type {import('tailwindcss').Config} */
module.exports = {
	theme: {
		extend: {
			colors: {
				primary: "#FF6A00",
				treeAccent: "#2986FF",
				treeText1: "#151718",
				treeText2: "#777777",
				treeRed: "#FF3C3C",
				treeGreen: "#1EA362",
				treePurple: "#7570FD",
				treeSidebarBg: "#2C2C2C",
				treeHeading: "#272124",
				treelightBlack: "#191919",
				treeRightBarBg: "#222222",
				treeMenu: "#ABABAB",
				600: "#1e88e5",
			},
		},
	},
	plugins: [],
	variants: {
		extend: {
			dropShadow: {
				"custom-shadow": "0 3px 12px rgba(220,220, 220, 0.4)",
			},
		},
	},
	corePlugins: {
		preflight: false,
	},
};
