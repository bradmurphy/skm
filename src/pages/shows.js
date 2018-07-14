import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from 'react-emotion';
import theme from '../utils/theme';

import {
  Wrap,
  HeaderContainer,
  Header,
  LineBreak,
  ShowWrap,
  Show,
  Band,
  Featuring,
  FeatureBand,
  Content,
  DetailsWrap,
  When,
  Info,
  InfoLink,
  InfoWrap,
} from '../components/global';

class Shows extends Component {
  render() {
    const { data } = this.props;

    return (
      <Wrap>
        <HeaderContainer>
          <Header>Shows</Header>
          <LineBreak />
        </HeaderContainer>
        <ShowWrap>
          {data.allWordpressPost.edges
            .filter(post => {
              return post.node.acf.show_date;
            })
            .sort((a, b) => {
              a = a.node.acf.show_date;
              b = b.node.acf.show_date;
              return a > b ? -1 : a < b ? 1 : 0;
            })
            .map(({ node }) => {
              const { title, content } = node;
              const {
                show_date,
                show_time,
                directions,
                band,
                venue,
                featuring,
              } = node.acf;

              return featuring[0].band !== null ? (
                <Show key={node.slug}>
                  <Band
                    href={band.link}
                    target="_blank"
                    dangerouslySetInnerHTML={{
                      __html: `${band.name} @ ${title}`,
                    }}
                  />
                  <Featuring>Featuring</Featuring>
                  {featuring.map(node => {
                    return (
                      <FeatureBand
                        key={node.name}
                        href={node.link}
                        dangerouslySetInnerHTML={{ __html: node.name }}
                      />
                    );
                  })}
                  <Content dangerouslySetInnerHTML={{ __html: content }} />
                  <DetailsWrap>
                    <When
                      dangerouslySetInnerHTML={{
                        __html: `${show_date} @ ${show_time}`,
                      }}
                    />
                    <InfoWrap>
                      <Info css={{ marginRight: '5px' }}>Venue:</Info>
                      <InfoLink
                        css={{ marginRight: '5px' }}
                        href={venue.link}
                        target="_blank"
                        dangerouslySetInnerHTML={{ __html: venue.name }}
                      />
                      <Info css={{ marginRight: '5px' }}>|</Info>
                      <InfoLink
                        href={directions}
                        css={{ color: theme.colors.orange }}
                        target="_blank"
                      >
                        Directions
                      </InfoLink>
                    </InfoWrap>
                  </DetailsWrap>
                </Show>
              ) : (
                <Show key={node.slug}>
                  <Band
                    href={band.link}
                    target="_blank"
                    dangerouslySetInnerHTML={{
                      __html: `${band.name} @ ${title}`,
                    }}
                  />
                  <Content dangerouslySetInnerHTML={{ __html: content }} />
                  <DetailsWrap>
                    <When
                      dangerouslySetInnerHTML={{
                        __html: `${show_date} @ ${show_time}`,
                      }}
                    />
                    <InfoWrap>
                      <Info css={{ marginRight: '5px' }}>Venue:</Info>
                      <InfoLink
                        css={{ marginRight: '5px' }}
                        href={venue.link}
                        target="_blank"
                        dangerouslySetInnerHTML={{ __html: venue.name }}
                      />
                      <Info css={{ marginRight: '5px' }}>|</Info>
                      <InfoLink
                        href={directions}
                        css={{ color: theme.colors.orange }}
                        target="_blank"
                      >
                        Directions
                      </InfoLink>
                    </InfoWrap>
                  </DetailsWrap>
                </Show>
              );
            })}
        </ShowWrap>
      </Wrap>
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
          content
          slug
          categories {
            slug
          }
          acf {
            show_date
            show_time
            directions
            band {
              link
              name
            }
            venue {
              link
              name
            }
            featuring {
              name
              link
            }
          }
        }
      }
    }
  }
`;
