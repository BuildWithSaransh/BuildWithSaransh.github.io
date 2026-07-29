module.exports = {
    content: [
        './index.html',
        './js/**/*.js'
    ],
    theme: {
        extend: {
            colors: {
                bg: '#0a0e1a',
                surface: '#0f1524',
                card: '#111a2e',
                border: '#1e293b',
                cyan: {
                    DEFAULT: '#22d3ee',
                    soft: '#67e8f9'
                },
                indigo: {
                    DEFAULT: '#6366f1'
                },
                muted: '#94a3b8'
            },
            fontFamily: {
                display: ['"Space Grotesk"', 'sans-serif'],
                body: ['Inter', 'sans-serif'],
                mono: ['"JetBrains Mono"', 'monospace']
            },
            boxShadow: {
                glow: '0 0 0 1px rgba(34,211,238,0.25), 0 0 24px -4px rgba(34,211,238,0.35)',
                glowIndigo: '0 0 0 1px rgba(99,102,241,0.25), 0 0 24px -4px rgba(99,102,241,0.35)'
            }
        }
    },
    plugins: [],
};
