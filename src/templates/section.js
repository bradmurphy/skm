import React, { Component } from 'react';

class SectionTemplate extends Component {
  render() {
    const page = this.props.data.wordpressPage;
    return (
      <div>
        <h1 dangerouslySetInnerHTML={{ __html: page.title }} />
        <div dangerouslySetInnerHTML={{ __html: page.content }} />
      </div>
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
