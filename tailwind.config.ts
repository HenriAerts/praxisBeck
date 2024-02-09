/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  variants: {
    transitionProperty: ['responsive', 'motion-safe', 'motion-reduce']
  },

  theme: {
    fontFamily: {
      sans: ["HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", "Helvetica", "sans-serif"]
    },
    extend: {
      rotate: {
        '225 ': '225deg',
      },
      animation: {
        'infinite-scroll-lr': 'infinite-scroll-lr 350s linear infinite',
        'infinite-scroll-rl': 'infinite-scroll-rl 350s linear infinite'
      },
      keyframes: {
        'infinite-scroll-lr': {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(0)' },
        },        
        'infinite-scroll-rl': {
          from: { transform: 'translateX(-55%)' },
          to: { transform: 'translateX(-155%)' },
        }
      },               
      colors: {
        gray: {
          10: '#F3F3F3',
        },

        blue: {
          10: "#044F76",
          20: "#006A9E",
          30: "#DDF2FD",
        },

      },

      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },

      backgroundImage:{
        "hero-image1": "url(/Medizinisch/pexels-anna-shvets-4483323.jpg)",
        "hero-image2": "url(/Medizinisch/pexels-artem-podrez-6823561.jpg)",
        "leistung-1": "url(/Medizinisch/pexels-antoni-shkraba-5215017.jpg)",
        "leistung-2": "url(/Medizinisch/pexels-towfiqu-barbhuiya-8395815.jpg)",
        "leistung-3": "url(/Medizinisch/pexels-chokniti-khongchum-3938022.jpg)",
        "person-1": "url(/Medizinisch/pexels-antoni-shkraba-5214964.jpg)",
        "person-2": "url(/Profile/pexels-italo-melo-2379004.jpg)",
        "person-3": "url(/Profile/pexels-thisisengineering-3861962.jpg)",
        "person-4": "url(/Medizinisch/pexels-antoni-shkraba-5214949.jpg)",
        "praxis-1": "url(/Medizinisch/pexels-cedric-fauntleroy-4269202.jpg)",
        "praxis-2": "url(/Medizinisch/pexels-cedric-fauntleroy-4269371.jpg)",
        "praxis-3": "url(/Medizinisch/pexels-cedric-fauntleroy-4269489.jpg)",
        "praxis-4": "url(/Medizinisch/pexels-shvets-production-8413185.jpg)",
        "praxis-5": "url(/Medizinisch/pexels-anna-shvets-4483323.jpg)",
      }
    },
  },
  plugins: [],
};