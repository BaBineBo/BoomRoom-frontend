import { Card } from "../atoms/Card/Card";
import { Furniture } from "../../models/rooms";
import { SquareLazyImage } from "../atoms/LazyImage/SquareLazyImage";
import { useTheme } from "../../hooks/useTheme";

interface FurnitureCardProps {
  furniture: Furniture;
}

export const FurnitureCard = ({ furniture }: FurnitureCardProps) => {
  const { theme } = useTheme();

  return (
    <Card
      key={furniture.id}
      backgroundColor={theme.palette.accent}
      width="100px"
    >
      <p>{furniture.name}</p>
      {furniture.imageLink && (
        <SquareLazyImage
          alt={"Picture for " + furniture.name}
          src={furniture.imageLink}
        />
      )}
    </Card>
  );
};
