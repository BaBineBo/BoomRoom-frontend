import { LinkProps } from "@tanstack/react-router";
import { useTheme } from "../../hooks/useTheme";
import { LinkingText } from "../atoms/LinkingText";
import { Text } from "../atoms/Text";

interface NavBarButtonProps extends LinkProps {
  text: string;
}

export const NavBarButton = ({ text, ...props }: NavBarButtonProps) => {
  const { theme } = useTheme();

  return (
    <LinkingText to={props.to}>
      {({ isActive }) => (
        <div
          style={{
            backgroundColor: isActive ? theme.palette.primary : "none",
            padding: theme.spacing.s,
            borderRadius: theme.borderRadius.s,
          }}
        >
          <Text>{text}</Text>
        </div>
      )}
    </LinkingText>
  );
};
