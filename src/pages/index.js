import React, { Component } from 'react';
import Link from 'gatsby-link';

class Home extends Component {
  render() {
    const { data } = this.props;

    return (
      <div>
        {/* <div css={{ marginBottom: 10 }}>
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
        </div> */}
        <h1>Upcoming Shows</h1>
        {data.allWordpressPost.edges.map(({ node }) => {
          const show = node.categories[0].slug === 'show';
          console.log(node.acf);
          show && (
            <div css={{ marginBottom: 10 }} key={node.slug}>
              <Link to={node.slug} css={{ textDecoration: `none` }}>
                <h3 />
              </Link>
              <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Home;

export const pageQuery = graphql`
  query homePageQuery {
    allWordpressPage {
      edges {
        node {
          id
          title
          excerpt
          slug
        }
      }
    }
    allWordpressPost(sort: { fields: [date] }) {
      edges {
        node {
          title
          excerpt
          slug
          date(formatString: "MMMM DD, YYYY")
          categories {
            slug
            name
          }
          acf {
            show_date
          }
        }
      }
    }
  }
`;
