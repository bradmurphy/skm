/**
 * Basic theme
 */

const palette = {
  primary: {
    contrast: 'white',
    main: 'linear-gradient(to right, #ffa100, #1C1C1C)',
  },
  secondary: {
    contrast: 'grey',
    main: '#242424',
    dark: '#1C1C1C',
  },
};

const baseSize = 18;

const typography = {
  baseFontSize: `${baseSize}px`,
};

const zIndex = {
  header: 10,
  overlay: 15,
  drawer: 20,
  headerText: 25,
};

export default {
  palette,
  typography,
  zIndex,
  size: size => `${size * baseSize}px`,
};
