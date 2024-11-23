import styled from "@emotion/styled";
import { Link } from "@tanstack/react-router";
import { ToggleTheme } from "./ToggleTheme";

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
const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const topBarId = "topBarId";

export const TopBar = () => {
  return (
    <TopBarStyled id={topBarId}>
      <Left>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/rooms">Rooms</StyledLink>
      </Left>
      <StyledLink to="/" style={{}}>
        <Middle>BoomRoom</Middle>
      </StyledLink>
      <Right>
        <ToggleTheme />
      </Right>
    </TopBarStyled>
  );
};
