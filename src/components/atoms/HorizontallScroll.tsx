import styled from "@emotion/styled";
import { PropsWithChildren } from "react";

const HorizontallScrollStyled = styled.div`
  display: flex;
  overflow-x: auto;
  width: 100%;
  gap: ${({ theme }) => theme.spacing.l};
`;

// TODO fix or remove - did cut of shadows from cards, not sure if necessary component
export const HorizontallScroll = ({ children }: PropsWithChildren) => {
  return <HorizontallScrollStyled>{children}</HorizontallScrollStyled>;
};
