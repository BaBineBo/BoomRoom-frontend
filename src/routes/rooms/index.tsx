import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { getQueryRooms } from "../../api/rooms/getQueryRooms";
import { Card } from "../../components/atoms/Card/Card";
import { Text } from "../../components/atoms/Text";
import { RoomCard } from "../../components/molecules/RoomCard";
import { queryClient } from "../../main";
import { IconButton } from "../../components/atoms/Button/IconButton";
import { useState } from "react";
import { AddRoomModal } from "../../components/organisms/Modals/AddRoomModal";
import PlusSVG from "../../assets/plus.svg?react";
import { useTheme } from "../../hooks/useTheme";
export const Route = createFileRoute("/rooms/")({
  component: RouteComponent,
  loader: () => queryClient.ensureQueryData(getQueryRooms),
});

function RouteComponent() {
  const {
    data: { rooms },
  } = useSuspenseQuery(getQueryRooms);

  const [addRoomModalOpen, setAddRoomModalOpen] = useState(false);
  const { windowMode } = useTheme();
  if (rooms.length === 0) {
    return (
      <Card center>
        <Text>Ledsen kompis, det finns inga rum</Text>
      </Card>
    );
  }

  // TODO acting weird at ~800px widht
  return (
    <>
      <AddRoomModal
        isOpen={addRoomModalOpen}
        onClose={() => setAddRoomModalOpen((prev) => !prev)}
      />
      <div
        style={{
          display: "flex",
          flexDirection: windowMode === "web" ? "row" : "column",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: 20,
        }}
      >
        <Card>
          <IconButton onClick={() => setAddRoomModalOpen((prev) => !prev)}>
            <PlusSVG />
          </IconButton>
        </Card>
        {rooms.map((r) => (
          <RoomCard room={r} key={r.id + "r"} />
        ))}
      </div>
    </>
  );
}
