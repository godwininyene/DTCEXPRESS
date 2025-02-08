import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            backgroundColor : {
                primary: '#1b3a5d',
                'primary-light':'#24263B',
              },
              colors:{
                gold:"#3ea2ee",
              },
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            keyframes: {
                wiggle: {
                  '0%, 100%': { transform: 'rotate(-3deg)' },
                  '50%': { transform: 'rotate(3deg)' },
                }
            },
            animation: {
                'wiggle': 'wiggle 3s linear ',
            }
        },
    },

    plugins: [forms],
};


