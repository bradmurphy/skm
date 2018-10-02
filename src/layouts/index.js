import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import styled from 'react-emotion';
import { ThemeProvider } from 'emotion-theming';
import Header from '../components/Header';
import theme from '../utils/theme';
import { navigateTo, withPrefix } from 'gatsby-link';

const Container = styled.main`
  background: ${p => p.theme.colors.offWhite};
  width: 100vw;
  height: 90vh;
`;

const Content = styled.section`
  background: ${p => p.theme.colors.offWhite};
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease-in-out;
  padding-top: ${p => p.theme.size(6)};
  overflow: auto;
`;

const Menu = styled.nav`
  background: ${p => theme.colors.darkgray};
  width: 100vw;
  height: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const Button = styled.a`
  text-decoration: none;
  font-size: 2em;
  color: ${p => theme.colors.orange};
`;

const TemplateWrapper = ({ children, navItems }) => (
  <ThemeProvider theme={theme}>
    <div>
      <Helmet>
        <title>Scott Kendall Music</title>
        <link
          href="https://fonts.googleapis.com/css?family=Oswald|Quattrocento:400,700|Questrial"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.1.1/css/all.css"
          integrity="sha384-O8whS3fhG2OnA5Kas0Y9l3cfpmYjapjI0E4theH4iuMD+pLhbf6JI0jIMfYcK3yZ"
          crossorigin="anonymous"
        />
      </Helmet>
      <Container>
        <Content>{children()}</Content>
      </Container>
      <Header />
      <Menu>
        <Button
          onClick={() => {
            navigateTo(withPrefix(navItems[0].url));
          }}
          className="fas fa-home"
        />
        <Button
          onClick={() => {
            navigateTo(withPrefix(navItems[1].url));
          }}
          className="fas fa-music"
        />
        <Button
          onClick={() => {
            navigateTo(withPrefix(navItems[2].url));
          }}
          className="fas fa-pen-square"
        />
      </Menu>
    </div>
  </ThemeProvider>
);

export default connect(state => ({
  navItems: state.app.navItems,
}))(TemplateWrapper);
