import React, { PropsWithChildren } from "react";
import { useTheme } from "../../../hooks/useTheme";
import styled from "@emotion/styled";
import { Theme } from "@emotion/react";

// Chatgpt is really cool sometimes
interface TextProps extends PropsWithChildren {
  variant?: keyof Theme["typography"]["fontSize"];
  fontSize?: string | number; // Optional override for font size
  textColor?: string; // Optional text color
}

export const Text: React.FC<TextProps> = ({
  variant = "p",
  fontSize,
  textColor,
  children,
}) => {
  const { theme } = useTheme();
  console.log(theme.typography);
  const TextStyle = styled.p`
    font-size: ${({ theme }) => fontSize ?? theme.typography.fontSize[variant]};
    color: ${({ theme }) => textColor ?? theme.palette.text};
    margin: 0;
    padding: 0;
  `;

  return <TextStyle>{children}</TextStyle>;
};
