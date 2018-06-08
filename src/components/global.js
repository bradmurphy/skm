/* header */
import Link from 'gatsby-link';
import styled from 'react-emotion';
import theme from '../utils/theme';

/* wrap, header and linebreak */

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
  font-size: ${p => p.theme.size(4)};
  line-height: ${p => p.theme.size(4)};
  letter-spacing: 2px;
  color: ${p => p.theme.colors.black};
  text-transform: lowercase;
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
  margin: 50px 0;
`;

const Show = styled.div`
  background: ${p => p.theme.colors.darkgray};
  max-width: 650px;
  width: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  margin-bottom: 35px;
  border: 1px solid ${p => p.theme.colors.darkgray};
`;

const DetailsWrap = styled.div`
  background: ${p => p.theme.colors.white};
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 15px;
  width: 100%;
`;

const When = styled.span`
  color: ${p => p.theme.colors.black};
  font-family: ${p => p.theme.typography.ui};
  font-size: ${p => p.theme.size(0.75)};
  line-height: ${p => p.theme.sizeLH(0.75)};
  display: block;
  text-transform: uppercase;
`;

const InfoWrap = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
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

const Info = styled.span`
  font-family: ${p => p.theme.typography.ui};
  color: ${p => p.theme.colors.black};
  font-size: ${p => p.theme.size(0.75)};
  line-height: ${p => p.theme.sizeLH(0.75)};
  text-transform: uppercase;
`;

const Band = styled.a`
  font-family: ${p => p.theme.typography.heading};
  color: ${p => p.theme.colors.orange};
  font-size: ${p => p.theme.size(1.75)};
  line-height: ${p => p.theme.sizeLH(1.75)};
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  padding: 10px 15px;
`;

const Content = styled.div`
  font-family: ${p => p.theme.typography.copy};
  font-size: ${p => p.theme.size(0.85)};
  line-height: ${p => p.theme.sizeLH(0.85)};
  color: ${p => p.theme.colors.white};
  padding: 0 15px;
`;

/* blog */

const EntryWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 15px 15px;
  width: 100%;
  max-width: 750px;
  margin: 50px 0;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const Bar = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: flex-start;
`;

const EntryHeading = styled.h2`
  font-family: ${p => p.theme.typography.heading};
  font-size: ${p => p.theme.size(2)};
  line-height: ${p => p.theme.sizeLH(2)};
  color: ${p => p.theme.colors.darkgray};
`;

const Date = styled.span`
  font-family: ${p => p.theme.typography.ui};
  font-size: ${p => p.theme.size(1)};
  line-height: ${p => p.theme.sizeLH(1)};
  color: ${p => p.theme.colors.gray};
  margin-top: -15px;
`;

const Copy = styled.div`
  font-family: ${p => p.theme.typography.copy};
  font-size: ${p => p.theme.size(1)};
  font-weight: 400;
  line-height: ${p => p.theme.sizeLH(1)};
  color: ${p => p.theme.colors.black};
  margin-top: 35px;
`;

const Listening = styled.p`
  font-family: ${p => p.theme.typography.ui};
  font-size: ${p => p.theme.size(0.75)};
  line-height: ${p => p.theme.sizeLH(0.75)};
  color: ${p => p.theme.colors.darkgray};
  text-transform: uppercase;
  display: flex;
  align-self: center;
`;

export default {
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
};
