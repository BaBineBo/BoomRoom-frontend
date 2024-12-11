import styled from "@emotion/styled";
import { HTMLMotionProps, motion } from "framer-motion";

const StyledButton = styled(motion.button)<{ backgroundColor?: string }>`
  /* Reset button styles */
  all: unset;
  display: inline-block; /* Ensure it behaves like a button */
  cursor: pointer;

  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor ?? theme.palette.primary};
  padding: ${({ theme }) => theme.spacing.s};
  border-radius: ${({ theme }) => theme.borderRadius.s};

  &:hover {
    background-color: ${({ theme }) => theme.palette.accent};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.palette.secondary};
    cursor: not-allowed;
  }
`;
export interface ButtonProps extends HTMLMotionProps<"button"> {
  backgroundColor?: string; // Default background color
}
export const Button = ({
  backgroundColor,
  children,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      backgroundColor={backgroundColor}
      whileHover={
        props.disabled
          ? undefined
          : {
              scale: 1.03,
              rotate: 1,
            }
      }
      whileTap={props.disabled ? undefined : { scale: 0.9 }}
      {...props}
    >
      {children}
    </StyledButton>
  );
};
