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

class Success extends Component {
  render() {
    return (
      <Wrap>
        <HeaderContainer>
          <Header>sent</Header>
          <LineBreak />
          <Copy css={{ textAlign: 'center' }}>
            Thanks, I'll get back to you shortly!
          </Copy>
        </HeaderContainer>
      </Wrap>
    );
  }
}

export default Success;
