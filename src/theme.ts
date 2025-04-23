import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    colors: {
        brand: {
            50: '#E6F4F5',
            100: '#CCE9EC',
            200: '#99D3D8',
            300: '#66BDC5',
            400: '#40A0AF', // Our main brand color
            500: '#338A97',
            600: '#26737F',
            700: '#1A5D67',
            800: '#0D464F',
            900: '#003037',
        },
    },
})

export default theme 