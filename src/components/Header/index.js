import React from 'react';
import Link from 'gatsby-link';
import styled from 'react-emotion';

const Top = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20vh;
  width: 100vw;
  position: fixed;
  z-index: ${p => p.theme.zIndex.header + 25};
  top: 0;
  left: 0;
  padding: 25px 0;
  background: ${p => p.theme.colors.offWhite};
`;

const Logo = styled(Link)`
  display: flex;
  flex-direction: row;
  font-family: ${p => p.theme.typography.ui};
  text-transform: uppercase;
  text-decoration: none;
  border: 2px solid ${p => p.theme.colors.darkgray};
  background: ${p => p.theme.colors.darkgray};
`;

const LogoNameContainer = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

const FirstName = styled.span`
  color: ${p => p.theme.colors.offWhite};
  font-size: ${p => p.theme.size(1.75)};
  line-height: ${p => p.theme.sizeLH(1.75)};
  letter-spacing: 6.75px;
  margin-left: 4px;
  display: block;
`;

const LastName = styled.span`
  color: ${p => p.theme.colors.orange};
  font-size: ${p => p.theme.size(1.25)};
  line-height: ${p => p.theme.sizeLH(1.25)};
  letter-spacing: 4.25px;
`;

const Music = styled.span`
  color: ${p => p.theme.colors.black};
  font-size: ${p => p.theme.size(1.75)};
  line-height: ${p => p.theme.sizeLH(1.75)};
  letter-spacing: 2px;
`;

const LogoMusicContainer = styled.div`
  background: ${p => p.theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
`;

const Header = () => (
  <div>
    <Top>
      <Logo to="/">
        <LogoNameContainer>
          <FirstName>Scott</FirstName>
          <LastName>Kendall</LastName>
        </LogoNameContainer>
        <LogoMusicContainer>
          <Music>Music</Music>
        </LogoMusicContainer>
      </Logo>
    </Top>
  </div>
);

export default Header;
