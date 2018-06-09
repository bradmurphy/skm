const initialState = {
  isDrawerOpen: false,
  navItems: [
    { url: '/', name: 'Home' },
    { url: '/blog/', name: 'Blog' },
    { url: '/shows/', name: 'Shows' },
    { url: '/about/', name: 'About' },
    { url: '/services/', name: 'Services' },
    { url: '/contact/', name: 'Contact' },
  ],
};

const TOGGLE_DRAWER = 'TOGGLE_DRAWER';
export const toggleDrawer = open => ({ type: TOGGLE_DRAWER, payload: open });

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_DRAWER:
      return { ...state, isDrawerOpen: payload };
    default:
      return state;
  }
};
