/**
 * Basic theme
 */

const colors = {
  gray: 'gray',
  darkgray: '#242424',
  white: '#fafafa',
  black: '#1C1C1C',
  orange: '#ffa100',
  transparent: 'transparent',
};

const baseSize = 16;

const typography = {
  baseFontSize: `${baseSize}px`,
  ui: "'Questrial', sans-serif;",
  heading: "'Oswald', sans-serif;",
  copy: "'Quattrocento', serif;",
};

const zIndex = {
  header: 10,
  overlay: 15,
  drawer: 20,
  headerText: 25,
};

export default {
  colors,
  typography,
  zIndex,
  size: size => `${size * baseSize}px`,
  sizeLH: size => `${size * baseSize + 4}px`,
};
