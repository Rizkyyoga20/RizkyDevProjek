module.exports = {
  purge: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {

    maxWidth: {
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
     },

    minWidth: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
     },
     extend: {

      gridColumn: {
        'span-16': 'span 16 / span 16',
       },
       gridColumnStart: {
        '13': '13',
        '14': '14',
        '15': '15',
        '16': '16',
        '17': '17',
       },

       gridColumnEnd: {
        '13': '13',
        '14': '14',
        '15': '15',
        '16': '16',
        '17': '17',
       },

       gridTemplateColumns: {
        // Simple 16 column grid
       '16': 'repeat(16, minmax(0, 1fr))',

        // Complex site-specific column configuration
       'footer': '200px minmax(900px, 1fr) 100px',
      },

      gridTemplateColumns: ['hover', 'focus'],


     },
   },
   variants: {
     extend: {},
   },
   plugins: [],

   corePlugins: {
      // ...
      gridTemplateColumns: false,
      minWidth: false,
    }

 }