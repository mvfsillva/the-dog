const baselineGrid = 4
const interfaceGrid = 8

const breakpoints = ['576px', '768px', '992px', '1200px']

const colors = {
  primary: {
    gray: '#7F7F7F',
    mercury: '#E4E4E4',
    silver: '#C2C1C1',
  },

  white: '#FFF',

  gray: {
    default: '#7E7E7E',
    light: '#BFBFBF',
    ultraLight: '#F7F7F7',

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
