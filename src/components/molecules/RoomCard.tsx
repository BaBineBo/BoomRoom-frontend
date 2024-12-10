import { Room } from "../../models/rooms";
import { Card } from "../atoms/Card/Card";
import { FurnitureCard } from "./FurnitureCard";

interface RoomCardProps {
  room: Room;
}

export const RoomCard = ({ room }: RoomCardProps) => {
  return (
    <Card key={room.id}>
      <p>{room.name}</p>
      {room.furniture.map((f) => (
        <FurnitureCard furniture={f} />
      ))}
    </Card>
  );
};
