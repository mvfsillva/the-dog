const baselineGrid = 4
const interfaceGrid = 8

const breakpoints = ['576px', '768px', '992px', '1200px']

const colors = {
  primary: {
    gray: '#7F7F7F',
    mercury: '#E4E4E4',
    silver: '#C2C1C1',
  },

  gray: {
    default: '#7e7e7e',
    light: '#bfbfbf',
    ultraLight: '#f7f7f7',

    // scale
    '050': '#fafafa',
    100: '#f5f5f5',
    200: '#eee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
  },
}

export default {
  baselineGrid,
  interfaceGrid,
  breakpoints,
  colors,
}
