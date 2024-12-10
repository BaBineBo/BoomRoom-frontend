import styled from "@emotion/styled";
import { PropsWithChildren } from "react";
import { useTheme } from "../../../hooks/useTheme";

interface CardProps extends PropsWithChildren {
  backgroundColor?: string;
  width?: string;
}

export const Card = ({ backgroundColor, width, children }: CardProps) => {
  const { windowMode } = useTheme();

  const StyledCard = styled.div`
    width: ${(width ?? windowMode === "phone") ? 140 : 300};
    gap: ${({ theme }) => theme.spacing.s};
    display: flex;
    flex-direction: column;
    max-width: 100%;
    box-shadow: ${({ theme }) => theme.shadow};
    border-radius: 8px;
    overflow: hidden;
    background: ${({ theme }) => backgroundColor ?? theme.palette.secondary};
    padding: 16px;
  `;

  return <StyledCard>{children}</StyledCard>;
};
