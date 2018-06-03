const initialState = {
  isDrawerOpen: false,
  navItems: [
    { url: '/', name: 'Home' },
    { url: '/about/', name: 'About' },
    { url: '/services/', name: 'Services' },
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
