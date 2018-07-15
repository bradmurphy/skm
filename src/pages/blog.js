import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from 'react-emotion';
import theme from '../utils/theme';

import {
  Wrap,
  HeaderContainer,
  Header,
  LineBreak,
  EntryWrap,
  Bar,
  EntryHeading,
  EntryDate,
  Copy,
  Listening,
} from '../components/global';

class Blog extends Component {
  render() {
    const { data } = this.props;

    return (
      <Wrap>
        <HeaderContainer>
          <Header>Blog</Header>
          <LineBreak />
        </HeaderContainer>
        {data.allWordpressPost.edges.map(({ node }) => {
          const blog = node.categories[0].slug === 'blog';
          const { currently_listening_to } = node.acf;
          const { title, content, date } = node;

          return (
            blog && (
              <EntryWrap key={node.slug}>
                <Bar>
                  <EntryHeading dangerouslySetInnerHTML={{ __html: title }} />
                  <EntryDate dangerouslySetInnerHTML={{ __html: date }} />
                </Bar>
                <Copy dangerouslySetInnerHTML={{ __html: content }} />
                <LineBreak
                  css={{
                    background: theme.colors.black,
                    maxWidth: 350,
                    margin: '25px auto',
                  }}
                />
                {currently_listening_to !== '' && (
                  <Listening>
                    <span
                      css={{
                        marginRight: '5px',
                        color: theme.colors.orange,
                      }}
                    >
                      Currently listening to:
                    </span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: currently_listening_to,
                      }}
                    />
                  </Listening>
                )}
              </EntryWrap>
            )
          );
        })}
      </Wrap>
    );
  }
}

export default Blog;

export const pageQuery = graphql`
  query blogQuery {
    allWordpressPost(sort: { fields: [date] }) {
      edges {
        node {
          title
          content
          excerpt
          slug
          date(formatString: "MMMM DD, YYYY")
          categories {
            slug
          }
          acf {
            currently_listening_to
          }
        }
      }
    }
  }
`;
