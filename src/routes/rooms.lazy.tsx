import { createLazyFileRoute } from "@tanstack/react-router";
import { HorizontallScroll } from "../components/atoms/Scroll/HorizontallScroll";
import { useQueryGetRooms } from "../api/rooms/useQueryGetRooms";
import { useMemo } from "react";
import { SquareLazyImage } from "../components/atoms/LazyImage/SquareLazyImage";

// TODO måste finnas något smart med tanstack router och queries som laddar.
export const Route = createLazyFileRoute("/rooms")({
  component: RouteComponent,
});

function RouteComponent() {
  const Q_GET_ROOMS = useQueryGetRooms();
  const rooms = useMemo(() => Q_GET_ROOMS.data?.rooms, [Q_GET_ROOMS.data]);

  if (Q_GET_ROOMS.isLoading) return <>laddar</>;
  return (
    <HorizontallScroll>
      {rooms?.map((r) => (
        <SquareLazyImage alt={""} src={r.furniture[0].imageLink ?? ""} />
      ))}
    </HorizontallScroll>
  );
}
