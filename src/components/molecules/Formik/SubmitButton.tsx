import { Button, ButtonProps } from "../../atoms/Button/Button";
import { Text } from "../../atoms/Text";

export const SubmitButton = ({ ...props }: ButtonProps) => {
  return (
    <Button {...props} type="submit">
      <Text>Spara</Text>
    </Button>
  );
};
