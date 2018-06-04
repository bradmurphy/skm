import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from 'react-emotion';
import theme from '../utils/theme';

/* wrap, header and linebreak*/

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 50px 20px;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Header = styled.h1`
  font-family: ${p => p.theme.typography.heading};
  font-size: ${p => p.theme.size(1.75)};
  color: ${p => p.theme.colors.black};
`;

const LineBreak = styled.hr`
  max-width: 150px;
  width: 100%;
  height: 2px;
  background: ${p => p.theme.colors.orange};
`;

/* show */

const ShowWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Show = styled.div`
  background: ${p => p.theme.colors.white};
  max-width: 650px;
  width: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  margin-bottom: 35px;
`;

/* details */

const DetailsWrap = styled.div`
  background: ${p => p.theme.colors.darkgray};
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 15px;
  width: 100%;
`;

/* where */
const When = styled.span`
  font-family: ${p => p.theme.typography.ui};
  font-size: ${p => p.theme.size(0.75)};
  line-height: ${p => p.theme.sizeLH(0.75)};
  display: block;
  text-transform: uppercase;
`;

/* info */

const InfoWrap = styled.div`
  align-items: 'center';
  display: 'flex';
  flex-direction: 'row';
  display: inherit;
`;

const InfoLink = styled.a`
  font-family: ${p => p.theme.typography.ui};
  color: ${p => p.theme.colors.gray};
  font-size: ${p => p.theme.size(0.75)};
  line-height: ${p => p.theme.sizeLH(0.75)};
  text-decoration: none;
  text-transform: uppercase;
`;

const Info = styled.a`
  font-family: ${p => p.theme.typography.ui};
  color: ${p => p.theme.colors.offWhite};
  font-size: ${p => p.theme.size(0.75)};
  line-height: ${p => p.theme.sizeLH(0.75)};
  text-transform: uppercase;
`;

/* band */

const Band = styled.a`
  font-family: ${p => p.theme.typography.heading};
  color: ${p => p.theme.colors.darkgray};
  font-size: ${p => p.theme.size(1.25)};
  line-height: ${p => p.theme.sizeLH(1.25)};
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  padding: 10px 15px;
`;

/* content */

const Content = styled.div`
  font-family: ${p => p.theme.typography.copy};
  font-size: ${p => p.theme.size(0.85)};
  line-height: ${p => p.theme.sizeLH(0.85)};
  color: ${p => p.theme.colors.black};
  padding: 0 15px;
`;

class Home extends Component {
  render() {
    const { data } = this.props;

    return (
      <Wrap>
        <HeaderContainer>
          <Header>Upcoming Shows</Header>
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
