import styled from "@emotion/styled";
import { PropsWithChildren } from "react";

const HorizontallScrollStyled = styled.div`
  display: flex;
  overflow-x: auto;
  width: 100%;
  gap: ${({ theme }) => theme.spacing.l};
`;

export const HorizontallScroll = ({ children }: PropsWithChildren) => {
  return <HorizontallScrollStyled>{children}</HorizontallScrollStyled>;
};
