import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import styled from 'react-emotion';
import { ThemeProvider } from 'emotion-theming';
import Header from '../components/Header';
import Drawer from '../components/Drawer';
import theme from '../utils/theme';
import { toggleDrawer as toggleDrawerAction } from '../state/app';

const Container = styled.main`
  background: ${p => p.theme.colors.offWhite};
  width: 100%;
`;

const Content = styled.section`
  background: transparent;
  width: 100%;
  height: 100vh;
  transition: transform 0.3s ease-in-out;
  transform: perspective(200px)
    ${p =>
      p.isDrawerOpen
        ? `translateX(${p.theme.size(8)}) translateZ(15px)`
        : 'none'};
  padding-top: ${p => p.theme.size(6)};
  overflow: auto;
`;

const Overlay = styled.div`
  position: fixed;
  z-index: ${p => p.theme.zIndex.overlay};
  top: 0;
  left: 0;
  background: ${p => p.theme.colors.black};
  width: 100vw;
  height: 100vw;
  transition: opacity 0.3s ease-in-out;
  opacity: ${p => (p.isDrawerOpen ? 0.5 : 0)};
  pointer-events: ${p => (p.isDrawerOpen ? 'all' : 'none')};
`;

const TemplateWrapper = ({ children, isDrawerOpen, toggleDrawer }) => (
  <ThemeProvider theme={theme}>
    <div>
      <Helmet>
        <title>Scott Kendall Music</title>
        <link
          href="https://fonts.googleapis.com/css?family=Oswald|Quattrocento:400,700|Questrial"
          rel="stylesheet"
        />
      </Helmet>
      <Container>
        <Content isDrawerOpen={isDrawerOpen}>{children()}</Content>
      </Container>
      <Overlay
        isDrawerOpen={isDrawerOpen}
        onClick={() => toggleDrawer(false)}
      />
      <Drawer />
      <Header />
    </div>
  </ThemeProvider>
);

export default connect(
  state => ({ isDrawerOpen: state.app.isDrawerOpen }),
  dispatch => ({ toggleDrawer: open => dispatch(toggleDrawerAction(open)) }),
)(TemplateWrapper);
