import React, { Component } from 'react';
import Link from 'gatsby-link';

class Blog extends Component {
  render() {
    const { data } = this.props;

    return (
      <div>
        <h1>Blog</h1>
        {data.allWordpressPost.edges.map(({ node }) => {
          const blog = node.categories[0].slug === 'blog';
          const { currently_listening_to } = node.acf;
          const { title, content } = node;

          return (
            blog && (
              <div css={{ marginBottom: 25 }} key={node.slug}>
                <h4>{title}</h4>
                <div dangerouslySetInnerHTML={{ __html: content }} />
                <span>
                  <span css={{ fontWeight: 'bold' }}>
                    Currently listening to:
                  </span>{' '}
                  {currently_listening_to}
                </span>
                <hr css={{ marginTop: 25 }} />
              </div>
            )
          );
        })}
      </div>
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
