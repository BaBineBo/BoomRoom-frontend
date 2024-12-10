import styled from "@emotion/styled";
import { PropsWithChildren } from "react";

const HorizontallScrollStyled = styled.div`
  display: flex;
  overflow-x: auto;
  width: 100%;
`;

export const HorizontallScroll = ({ children }: PropsWithChildren) => {
  return <HorizontallScrollStyled>{children}</HorizontallScrollStyled>;
};
