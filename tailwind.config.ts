const config = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        display: ['Satoshi', 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      spacing: {
        4: '1rem',
        8: '2rem',
        12: '3rem',
        16: '4rem',
        24: '6rem',
        32: '8rem',
        48: '12rem',
        64: '16rem',
      },
      colors: {
        neon: {
          purple: '#7c3aed',
          cyan: '#22d3ee',
        },
      },
      boxShadow: {
        glowPurple: '0 0 20px rgba(168, 85, 247, 0.6)',
        glowCyan: '0 0 20px rgba(34, 211, 238, 0.6)',
      },
      letterSpacing: {
        'custom': '0.02em',
      },
    },
  },
  plugins: [],
}

export default config
