import React, { useState } from "react";
import { Room } from "../../models/rooms";
import { IconButton } from "../atoms/Button/IconButton";
import { Card } from "../atoms/Card/Card";
import { LinkingText } from "../atoms/LinkingText";
import { Text } from "../atoms/Text";
import { AddFurnitureModal } from "../organisms/Modals/AddFurnitureModal";
import { FurnitureCard } from "./FurnitureCard";
import PlusSVG from "../../assets/plus.svg?react";
interface RoomCardProps {
  room: Room;
}

export const RoomCard = ({ room }: RoomCardProps) => {
  const [addFurnitureModalOpen, setAddFurnitureModalOpen] = useState(false);
  return (
    <React.Fragment>
      <AddFurnitureModal
        isOpen={addFurnitureModalOpen}
        onClose={() => setAddFurnitureModalOpen((prev) => !prev)}
      />
      <Card>
        <LinkingText to="/rooms/$roomId" params={{ roomId: room.id }}>
          <Text>{room.name}</Text>
        </LinkingText>
        {room.furniture.map((f) => (
          <FurnitureCard furniture={f} key={f.id + "f"} />
        ))}
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <IconButton onClick={() => setAddFurnitureModalOpen((prev) => !prev)}>
            <PlusSVG />
          </IconButton>
        </div>
      </Card>
    </React.Fragment>
  );
};
