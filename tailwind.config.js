module.exports = {
    content: [
        './index.html',
        './js/**/*.js'
    ],
    theme: {
        extend: {
            colors: {
                paper: '#F4F3EE',
                'paper-deep': '#EAE9E2',
                ink: '#171A16',
                muted: '#666B63',
                border: '#D9D9D0',
                green: '#315D49',
                dark: '#111410',
                'dark-surface': '#1A1E19',
                'dark-muted': '#A9AEA4'
            },
            fontFamily: {
                display: ['Manrope', 'sans-serif'],
                body: ['"DM Sans"', 'sans-serif'],
                mono: ['"DM Mono"', 'monospace']
            },
        }
    },
    plugins: [],
};
