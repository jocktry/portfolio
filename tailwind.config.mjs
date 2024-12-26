/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
        extend: {
            colors: {
                'button-bg': 'rgba(255, 192, 203, 0.5)',
				'navBar-color': "#ffffff80"
            },
        },
    },
	plugins: [],
}
