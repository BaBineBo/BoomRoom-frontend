import { createFileRoute } from "@tanstack/react-router";
import { Text } from "../../components/atoms/Text";

// TODO maybe like rooms settings, overview??
export const Route = createFileRoute("/rooms/$roomId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { roomId } = Route.useParams();
  return <Text> Hello /rooms/{roomId}!</Text>;
}
