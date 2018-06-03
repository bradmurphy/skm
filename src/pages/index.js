import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

class Home extends Component {
  render() {
    const { data } = this.props;

    data.allWordpressPost.edges.map(({ node }) => {
      console.log(node.categories[0]);
    });

    return (
      <div>
        <div css={{ marginBottom: 10 }}>
          <h1>Pages</h1>
          {data.allWordpressPage.edges.map(({ node }) => (
            <div key={node.slug}>
              <Link to={node.slug} css={{ textDecoration: `none` }}>
                <h3>{node.title}</h3>
              </Link>
              <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              <span>{node.date}</span>
            </div>
          ))}
        </div>
        <hr />
        <h1>Posts</h1>
        {data.allWordpressPost.edges.map(({ node }, index) => (
          <div css={{ marginBottom: 10 }} key={node.slug}>
            <Link to={node.slug} css={{ textDecoration: `none` }}>
              <h3>{node.title}</h3>
            </Link>
            <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            <div
              dangerouslySetInnerHTML={{ __html: node.categories[index].name }}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Home;

// Set here the ID of the home page.
export const pageQuery = graphql`
  query homePageQuery {
    allWordpressPage {
      edges {
        node {
          id
          title
          excerpt
          slug
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
    allWordpressPost(sort: { fields: [date] }) {
      edges {
        node {
          title
          excerpt
          slug
          date
          categories {
            slug
            name
          }
        }
      }
    }
  }
`;
