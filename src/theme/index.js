const baselineGrid = 4
const interfaceGrid = 8

const breakpoints = ['576px', '768px', '992px', '1200px']

const colors = {
  white: '#FFF',
  gray: {
    default: '#838383',
    mercury: '#eaeaea',
    chalice: '#a4a4a4',
    silver: '#b9b9b9',

    // scale
    '050': '#FAFAFA',
    100: '#F5F5F5',
    200: '#EEE',
    300: '#E0E0E0',
    400: '#BDBDBD',
    500: '#9E9E9E',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
  },
}

const fonts = {
  primary: 'Helvetica Neue, Helvetica, Roboto, sans-serif',
}

export default {
  baselineGrid,
  interfaceGrid,
  breakpoints,
  colors,
  fonts,
}
