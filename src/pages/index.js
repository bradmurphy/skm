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
  Date,
  Copy,
  Listening,
} from '../components/global';

class Home extends Component {
  state = { posts: [], shows: [] };

  componentDidMount() {
    this._renderMaxEntries();
    const overflow = document.querySelector('html');
    overflow.style.overflow = 'hidden';
  }

  _renderMaxEntries = () => {
    const { data } = this.props;

    data.allWordpressPost.edges.map(({ node }) => {
      const blog = node.categories[0].slug === 'blog';
      const show = node.categories[0].slug === 'show';

      if (blog) {
        this.setState(prevState => ({
          posts: [...prevState.posts, node],
        }));
      } else if (show) {
        this.setState(prevState => ({
          shows: [...prevState.shows, node],
        }));
      }
    });
  };

  render() {
    const { posts, shows } = this.state;

    return (
      <Wrap>
        <HeaderContainer>
          <Header>Upcoming Shows</Header>
          <LineBreak />
        </HeaderContainer>
        <ShowWrap>
          {shows
            .sort((a, b) => {
              a = a.acf.show_date;
              b = b.acf.show_date;
              return a > b ? -1 : a < b ? 1 : 0;
            })
            .map((node, index) => {
              const { title, content } = node;
              const {
                show_date,
                show_time,
                directions,
                band,
                venue,
                featuring,
              } = node.acf;

              return featuring !== null ? (
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
        <HeaderContainer>
          <Header>recent blog posts</Header>
          <LineBreak />
        </HeaderContainer>
        {posts.map((node, index) => {
          const { currently_listening_to } = node.acf;
          const { title, content, date } = node;

          return index <= 3 ? (
            <EntryWrap key={node.slug}>
              <Bar>
                <EntryHeading dangerouslySetInnerHTML={{ __html: title }} />
                <Date dangerouslySetInnerHTML={{ __html: date }} />
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
                    dangerouslySetInnerHTML={{ __html: currently_listening_to }}
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
              link
              name
            }
          }
        }
      }
    }
  }
`;
