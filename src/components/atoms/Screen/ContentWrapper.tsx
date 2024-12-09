import styled from "@emotion/styled";
import { PropsWithChildren } from "react";

/**
 *
 * @returns wrapper div, fills the screen with respect to the topBar but does not expand
 */
export const ContentWrapper = ({ children }: PropsWithChildren) => {
  const ContentWrapperStyled = styled.div`
    flex: 1;
    padding: ${({ theme }) => theme.spacing.m};
    padding-left: ${({ theme }) => theme.spacing.l};
    padding-right: ${({ theme }) => theme.spacing.l};
  `;

  return <ContentWrapperStyled>{children}</ContentWrapperStyled>;
};
