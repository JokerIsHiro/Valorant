/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ["./**/*.{html,js}"],
    theme: {
        extend: {
            backgroundImage: {
                'dark-bg': "url('../assets/dark_bg.jpg')",
                'light-bg': "url('../assets/light_bg.png')",
                'dark-bug': "url('../assets/dark_bug.png')",
                'light-bug': "url('../assets/light_bug.png')",
            },
            colors: {
                'dark-text': '#e5e7eb', // Light gray text for dark mode
                'light-text': '#1f2937', // Dark gray text for light mode
            },
        },
    },
    plugins: [],
}