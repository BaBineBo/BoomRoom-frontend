import { Theme } from "@emotion/react";
import styled from "@emotion/styled";
import React, { PropsWithChildren } from "react";

// Chatgpt is really cool sometimes
interface TextProps extends PropsWithChildren {
  variant?: keyof Theme["typography"]["fontSize"];
  fontSize?: string | number; // Optional override for font size
  textColor?: string; // Optional text color
  onClick?: () => void;
}

export const Text: React.FC<TextProps> = ({
  variant = "p",
  fontSize,
  textColor,
  children,
  onClick = undefined,
}) => {
  const TextStyle = styled.p`
    font-size: ${({ theme }) => fontSize ?? theme.typography.fontSize[variant]};
    color: ${({ theme }) => textColor ?? theme.palette.text};
    text-decoration: ${onClick === undefined ? "none" : "underlined"};
    margin: 0;
    padding: 0;
  `;
  return <TextStyle>{children}</TextStyle>;
};
