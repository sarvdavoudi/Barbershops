import baseConfig from './TailwindBase.js'

const config = {
    presets: [
        baseConfig
    ],
    theme: {
        extend: {
            colors: {
                custom: {
                    color1: '#dfca81',
                    color11: '#dec87f',
                    color12: '#e5b43b',
                    color13: '#c29a45',
                    color14:'#200e32',
                    color2: '#000',
                    color21: '#e5e7eb',
                    color22: '#5d5d5d',
                    color23: '#303030',
                    color3: '#fff',
                }
            }
        }
    },
    plugins: [],
    important: true
}

export default config
