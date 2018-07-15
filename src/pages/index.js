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
  EntryWrap,
  Bar,
  EntryHeading,
  EntryDate,
  Copy,
  Listening,
} from '../components/global';

class Home extends Component {
  componentDidMount() {
    const overflow = document.querySelector('html');
    overflow.style.overflow = 'hidden';
  }

  render() {
    const { data } = this.props;

    return (
      <Wrap>
        <HeaderContainer>
          <Header>Upcoming Shows</Header>
          <LineBreak />
        </HeaderContainer>
        <ShowWrap>
          {data.allWordpressPost.edges
            .filter(post => {
              return post.node.acf.band;
            })
            .sort((a, b) => {
              a = new Date(a.node.acf.show_date);
              b = new Date(b.node.acf.show_date);
              console.log(a, b);
              return a > b ? 1 : a < b ? -1 : 0;
            })
            .map(({ node }, index) => {
              const { title, content } = node;
              const {
                show_date,
                show_time,
                directions,
                band,
                venue,
                featuring,
              } = node.acf;

              return (
                index <= 1 &&
                (featuring[0].name !== null ? (
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
                ))
              );
            })}
        </ShowWrap>
        <HeaderContainer>
          <Header>recent blog posts</Header>
          <LineBreak />
        </HeaderContainer>
        {data.allWordpressPost.edges
          .filter(post => {
            return post.node.acf.currently_listening_to;
          })
          .map(({ node }, index) => {
            const { currently_listening_to } = node.acf;
            const { title, content, date } = node;

            return index <= 3 ? (
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
            ) : null;
          })}
      </Wrap>
    );
  }
}

export default Home;

export const pageQuery = graphql`
  query homeQuery {
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
            currently_listening_to
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
