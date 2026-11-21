/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0077D4',
          'blue-dark': '#005FA8',
          'blue-deep': '#004F8A',
          navy: '#002B49',
          'navy-light': '#003B66',
          'blue-tint': '#EBF4FC',
          'blue-border': '#CCE4F6',
        },
        surface: {
          page: '#F8F9FA',
          card: '#FFFFFF',
          alt: '#F3F6F9',
          muted: '#F1F5F9',
        },
        text: {
          heading: '#1A1D20',
          body: '#333940',
          muted: '#626D7A',
          subtle: '#8C96A3',
        },
        border: {
          default: '#E1E4E8',
          subtle: '#EEF0F2',
          focus: '#0077D4',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'unesco-card': '0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.03)',
        'unesco-hover': '0 12px 24px -4px rgba(0, 43, 73, 0.12), 0 4px 8px -2px rgba(0, 43, 73, 0.06)',
        'unesco-nav': '0 2px 10px rgba(0, 43, 73, 0.06)',
        'unesco-focus': '0 0 0 3px rgba(0, 119, 212, 0.25)',
      },
      maxWidth: {
        'container': '1320px',
      }
    },
  },
  plugins: [],
}
