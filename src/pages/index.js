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
    overflow.style.overflow = 'overflow !important';
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
    const { data } = this.props;

    return (
      <Wrap>
        <HeaderContainer>
          <Header>Upcoming Shows</Header>
          <LineBreak />
        </HeaderContainer>
        <ShowWrap>
          {shows.map((node, index) => {
            const { title, content } = node;
            const {
              show_date,
              show_time,
              directions,
              venue_name,
              venue_link,
              band_name,
              band_link,
            } = node.acf;

            return index <= 1 ? (
              <Show key={node.slug}>
                <Band href={band_link} target="_blank">
                  {band_name} @ {title}
                </Band>
                <Content dangerouslySetInnerHTML={{ __html: content }} />
                <DetailsWrap>
                  <When>
                    {show_date}
                    {' @ '}
                    {show_time}
                  </When>
                  <InfoWrap>
                    <Info css={{ marginRight: '5px' }}>Venue:</Info>
                    <InfoLink
                      css={{ marginRight: '5px' }}
                      href={venue_link}
                      target="_blank"
                    >
                      {venue_name}
                    </InfoLink>
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
            ) : null;
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
                <EntryHeading>{title}</EntryHeading>
                <Date>{date}</Date>
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
                  {currently_listening_to}
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
          date(formatString: "MMMM DD, YYYY")
          categories {
            slug
          }
          acf {
            show_date
            show_time
            directions
            venue_name
            venue_link
            band_name
            band_link
            currently_listening_to
          }
        }
      }
    }
  }
`;
