import styled from "@emotion/styled";
import { LinkingText } from "../atoms/LinkingText";
import { NavBarButton } from "../molecules/NavBarButton";
import { ToggleTheme } from "../molecules/ToggleTheme";

const TopBarStyled = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.background};
`;

const Left = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
  justify-content: flex-start;
  padding: ${({ theme }) => theme.spacing.s};
  gap: ${({ theme }) => theme.spacing.s};
`;

const Right = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
  padding: ${({ theme }) => theme.spacing.s};
`;

const Middle = styled.h1`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 100%;
  font-family: DynaPuff;
  font-size: 50px;
  margin: 0px;
  padding: ${({ theme }) => theme.spacing.s};
  color: ${({ theme }) => theme.palette.text};
`;

export const topBarId = "topBarId";

export const NavBar = () => {
  return (
    <TopBarStyled id={topBarId}>
      <Left>
        <NavBarButton to="/" text="Hem" />
        <NavBarButton to="/rooms" text="Rum" />
      </Left>
      <LinkingText to="/" style={{}}>
        <Middle>BoomRoom</Middle>
      </LinkingText>
      <Right>
        <ToggleTheme />
      </Right>
    </TopBarStyled>
  );
};
