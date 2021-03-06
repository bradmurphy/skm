import React from 'react';
import { connect } from 'react-redux';
import styled from 'react-emotion';
import { navigateTo, withPrefix } from 'gatsby-link';
import { toggleDrawer as toggleDrawerAction } from '../../state/app';

const Paper = styled.aside`
  position: fixed;
  z-index: ${p => p.theme.zIndex.drawer};
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  height: 100vh;
  width: ${p => p.theme.size(16)};
  background: ${p => p.theme.colors.darkgray};
  transition: transform 0.3s ease-in-out;
  transform: translateX(${p => (p.isDrawerOpen ? 0 : `-${p.theme.size(16)}`)});
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  height: ${p => p.theme.size(8)};
  background: ${p => p.theme.colors.darkgray};
`;

const Item = styled.a`
  font-family: ${p => p.theme.typography.ui};
  text-transform: uppercase;
  color: ${p => p.theme.colors.gray};
  padding: ${p => p.theme.size(1)} ${p => p.theme.size(2)};
  transition: all 0.1s ease-out;
  &:hover {
    color: ${p => p.theme.colors.orange};
    background: ${p => p.theme.colors.black};
  }
  cursor: pointer;
`;

const Drawer = ({ isDrawerOpen, toggleDrawer, navItems }) => {
  return (
    <Paper isDrawerOpen={isDrawerOpen}>
      <Header />
      {navItems.map(item => (
        <Item
          key={item.url}
          onClick={() => {
            navigateTo(withPrefix(item.url));
            toggleDrawer(false);
          }}
        >
          {item.name}
        </Item>
      ))}
    </Paper>
  );
};

export default connect(
  state => ({
    isDrawerOpen: state.app.isDrawerOpen,
    navItems: state.app.navItems,
  }),
  dispatch => ({ toggleDrawer: open => dispatch(toggleDrawerAction(open)) }),
)(Drawer);
