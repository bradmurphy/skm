import React, { Component } from 'react';
import styled from 'react-emotion';
import theme from '../utils/theme';

import {
  Wrap,
  HeaderContainer,
  Header,
  LineBreak,
  Copy,
} from '../components/global';
class SectionTemplate extends Component {
  render() {
    const page = this.props.data.wordpressPage;
    return (
      <Wrap>
        <HeaderContainer>
          <Header dangerouslySetInnerHTML={{ __html: page.title }} />
          <LineBreak />
        </HeaderContainer>
        {/* <h1 dangerouslySetInnerHTML={{ __html: page.title }} /> */}
        <Copy
          css={{ maxWidth: 750, margin: '0 auto', width: '100%' }}
          dangerouslySetInnerHTML={{ __html: page.content }}
        />
      </Wrap>
    );
  }
}

export default SectionTemplate;

export const sectionQuery = graphql`
  query currentSectionQuery($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
    }
  }
`;
