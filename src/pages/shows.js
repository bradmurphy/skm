import React, { Component } from 'react';
import Link from 'gatsby-link';

class Shows extends Component {
  render() {
    const { data } = this.props;

    return (
      <div>
        <h1>Shows</h1>
        {data.allWordpressPost.edges.map(({ node }) => {
          const show = node.categories[0].slug === 'show';
          const {
            show_date,
            show_time,
            directions,
            venue_name,
            venue_link,
          } = node.acf;

          return (
            show && (
              <div css={{ marginBottom: 25 }} key={node.slug}>
                <h5>
                  <span css={{ fontWeight: 'bold' }}>WHEN:</span> {show_date}
                  {' @ '}
                  {show_time}
                </h5>
                <a
                  href={directions}
                  css={{ textDecoration: `none`, display: 'block' }}
                  target="_blank"
                >
                  <span>Directions</span>
                </a>
                <a
                  href={venue_link}
                  css={{ textDecoration: `none`, display: 'block' }}
                  target="_blank"
                >
                  <span>{venue_name}</span>
                </a>
                <hr css={{ marginTop: 25 }} />
              </div>
            )
          );
        })}
      </div>
    );
  }
}

export default Shows;

export const pageQuery = graphql`
  query showsQuery {
    allWordpressPost(sort: { fields: [date] }) {
      edges {
        node {
          title
          slug
          categories {
            slug
          }
          acf {
            show_date
            show_time
            directions
            venue_name
            venue_link
          }
        }
      }
    }
  }
`;
