//--------------------------------------------------------------------------
// Tailwind Typography configuration
//--------------------------------------------------------------------------
//
// Here you may overwrite the default Tailwind Typography (or prosé) styles or configure certain variants.
// More info: https://tailwindcss.com/docs/typography-plugin.
//


const colors = require('tailwindcss/colors')

const round = (num) =>
    num
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
                            marginTop: '0em !important',
                            marginBottom: '0em !important',
                        },
                        fontSize: rem(20),
                        lineHeight: round(24 / 18),
                        h1: {
                            fontSize: em(38, 18),
                            marginTop: '0',
                            marginBottom: em(24, 30),
                            lineHeight: round(36 / 30),
                        },
                        h2: {
                            fontSize: em(34, 18),
                            marginTop: em(32, 20),
                            marginBottom: em(16, 20),
                            lineHeight: round(28 / 20),
                        },
                        h3: {
                            fontSize: em(28, 18),
                            marginTop: em(28, 18),
                            marginBottom: em(8, 18),
                            lineHeight: round(28 / 18),
                        },
                        h4: {
                            fontSize: em(24, 18),
                            marginTop: em(20, 18),
                            marginBottom: em(8, 18),
                            lineHeight: round(20 / 14),
                        },
                    }
                }
            }),
        }
    },
    plugins: [
        require('@tailwindcss/typography')({
            modifiers: [],
        }),
    ]
}
