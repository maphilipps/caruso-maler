//--------------------------------------------------------------------------
// Tailwind Typography configuration
//--------------------------------------------------------------------------
//
// Here you may overwrite the default Tailwind Typography (or prosé) styles or configure certain variants.
// More info: https://tailwindcss.com/docs/typography-plugin.
//


const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

const round = (num) => num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const rem = (px) => `${round(px / 16)}rem`
const em = (px, base) => `${round(px / base)}em`

const plugin = require('tailwindcss/plugin')

module.exports = {
    theme: {
        extend: {
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        'ul > li p, ol > li p': {
                            marginTop: '0em !important', marginBottom: '0em !important',
                        }, fontSize: rem(20), lineHeight: round(24 / 18), h1: {
                            marginTop: '0',
                            marginBottom: em(24, 30),
                            lineHeight: round(36 / 30),
                            fontSize: theme('fontSize.5xl'),
                            fontWeight: theme('fontWeight.bold'),
                            letterSpacing: theme('letterSpacing.tight'),
                            textTransform: 'uppercase'
                        }, h2: {
                            marginTop: em(32, 20),
                            marginBottom: em(16, 20),
                            lineHeight: round(28 / 20),
                            fontSize: theme('fontSize.4xl'),
                            fontWeight: theme('fontWeight.bold'),
                            letterSpacing: theme('letterSpacing.tight'),
                            textTransform: 'uppercase'

                        }, h3: {
                            marginTop: em(28, 18),
                            marginBottom: em(8, 18),
                            lineHeight: round(28 / 18),
                            fontSize: theme('fontSize.3xl'),
                            fontWeight: theme('fontWeight.bold'),
                            letterSpacing: theme('letterSpacing.tight'),
                            textTransform: 'uppercase'

                        }, h4: {
                            marginTop: em(20, 18),
                            marginBottom: em(8, 18),
                            lineHeight: round(20 / 14),
                            fontSize: theme('fontSize.2xl'),
                            fontWeight: theme('fontWeight.bold'),
                            letterSpacing: theme('letterSpacing.tight')
                        },
                    }
                }
            }),
        }
    }, plugins: [require('@tailwindcss/typography')({
        modifiers: [],
    }),]
}
