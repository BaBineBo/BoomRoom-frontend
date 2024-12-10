import { Room } from "../../models/rooms";
import { Card } from "../atoms/Card/Card";
import { FurnitureCard } from "./FurnitureCard";
import { Text } from "../atoms/Text/Text";
interface RoomCardProps {
  room: Room;
}

export const RoomCard = ({ room }: RoomCardProps) => {
  return (
    <Card key={room.id}>
      <Text>{room.name}</Text>
      {room.furniture.map((f) => (
        <FurnitureCard furniture={f} />
      ))}
    </Card>
  );
};
