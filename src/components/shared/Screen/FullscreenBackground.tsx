import styled from "@emotion/styled";
import { PropsWithChildren } from "react";

// Define a styled component that fills the entire viewport
const FullScreenBackgroundStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw; /* 100% of the viewport width */
  height: 100vh; /* 100% of the viewport height */
  background-color: ${({ theme }) => theme.palette.background};
`;

interface FullScreenBackgroundProps extends PropsWithChildren {}

/**
 *
 * @returns background of app, fills screen, does not expand or shrink
 */
export const FullScreenBackground = ({
  children,
}: FullScreenBackgroundProps) => {
  return <FullScreenBackgroundStyled>{children}</FullScreenBackgroundStyled>;
};
