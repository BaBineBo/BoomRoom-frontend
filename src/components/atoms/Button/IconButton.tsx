import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { PropsWithChildren } from "react";
import { getContrastTextColor } from "../../../utils/getContrastTextColor";
import { motion } from "framer-motion";
import { getTransparentColor } from "../../../utils/getTransparentColor";

export interface IconButtonProps extends PropsWithChildren {
  onClick: () => void;
  backgroundColor?: string; // Default background color
  iconColor?: string;
}

export const IconButton = ({
  children: svg,
  backgroundColor,
  iconColor,
  onClick,
}: IconButtonProps) => {
  const theme = useTheme();

  const calcBackgroundColor = backgroundColor ?? theme.palette.accent;

  const IconButtonStyled = styled(motion.button)<IconButtonProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${calcBackgroundColor};
    border-radius: 50%;
    border: none;
    padding: ${({ theme }) => theme.spacing.s};
    cursor: pointer;
    transition: background-color 0.3s ease;
  `;

  return (
    <div>
      <IconButtonStyled
        whileHover={{
          scale: 1.03,
          backgroundColor: getTransparentColor(calcBackgroundColor, 0.7),
          rotate: 1,
        }}
        whileTap={{ scale: 0.9 }}
        onClick={onClick}
        iconColor={
          iconColor ?? getContrastTextColor(calcBackgroundColor, theme)
        }
        backgroundColor={calcBackgroundColor}
      >
        {svg}
      </IconButtonStyled>
    </div>
  );
};
