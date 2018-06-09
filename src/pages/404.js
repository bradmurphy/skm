import React, { Component } from 'react';
import { navigateTo } from 'gatsby-link';
import styled from 'react-emotion';
import theme from '../utils/theme';

import {
  Wrap,
  HeaderContainer,
  Header,
  LineBreak,
  Copy,
} from '../components/global';

class FourOhFour extends Component {
  render() {
    return (
      <Wrap>
        <HeaderContainer>
          <Header>404</Header>
          <LineBreak />
          <Copy css={{ textAlign: 'center' }}>
            This isn't a red pill, blue pill situation.<br />
            &larr; Stick to the menu.
          </Copy>
        </HeaderContainer>
      </Wrap>
    );
  }
}

export default FourOhFour;
