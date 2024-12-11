import { Card } from "../atoms/Card/Card";
import { Furniture } from "../../models/rooms";
import { SquareLazyImage } from "../atoms/Images/SquareLazyImage";
import { useTheme } from "../../hooks/useTheme";
import { Text } from "../atoms/Text";
import { LinkingText } from "../atoms/LinkingText";

interface FurnitureCardProps {
  furniture: Furniture;
}

export const FurnitureCard = ({ furniture }: FurnitureCardProps) => {
  const { theme } = useTheme();

  return (
    <Card backgroundColor={theme.palette.accent} width="100px">
      <LinkingText
        to="/rooms/$roomId/furniture/$furnitureId"
        params={{
          roomId: furniture.roomId,
          furnitureId: furniture.id,
        }}
      >
        <Text>{furniture.name}</Text>
      </LinkingText>
      {furniture.imageLink && (
        <SquareLazyImage
          alt={"Picture for " + furniture.name}
          src={furniture.imageLink}
        />
      )}
    </Card>
  );
};
