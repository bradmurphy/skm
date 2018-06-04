import React from 'react';
import { connect } from 'react-redux';
import styled from 'react-emotion';
import theme from '../../utils/theme';

const Hamburger = styled.span`
  transition: transform 0.3s ease-in-out;
  transform: ${props => (props.isDrawerOpen ? 'scale(0.7)' : 'scale(0.9)')};
`;

const Line = styled.span`
  width: 40px;
  height: 5px;
  background: ${p => p.theme.colors.black};
  display: block;
  margin: 8px auto;
  transition: transform 0.3s ease-in-out;
`;

const Menu = ({ isDrawerOpen }) => (
  <Hamburger isDrawerOpen={isDrawerOpen}>
    <Line
      css={{
        transform: isDrawerOpen ? 'translateX(-10px) rotate(-45deg)' : 'none',
        background: isDrawerOpen ? theme.colors.orange : theme.colors.darkgray,
      }}
    />
    <Line
      css={{
        background: isDrawerOpen ? theme.colors.orange : theme.colors.darkgray,
      }}
    />
    <Line
      css={{
        transform: isDrawerOpen ? 'translateX(-10px) rotate(45deg)' : 'none',
        background: isDrawerOpen ? theme.colors.orange : theme.colors.darkgray,
      }}
    />
  </Hamburger>
);

export default connect(
  state => ({ isDrawerOpen: state.app.isDrawerOpen }),
  dispatch => ({ toggleDrawer: open => dispatch(toggleDrawerAction(open)) }),
)(Menu);
