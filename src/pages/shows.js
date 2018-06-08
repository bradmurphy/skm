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
          {data.allWordpressPost.edges.map(({ node }) => {
            const show = node.categories[0].slug === 'show';
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

            return (
              show && (
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
              )
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
            venue_name
            venue_link
            band_name
            band_link
          }
        }
      }
    }
  }
`;
