import { createLazyFileRoute } from "@tanstack/react-router";
import { HorizontallScroll } from "../components/atoms/Scroll/HorizontallScroll";

export const Route = createLazyFileRoute("/rooms")({
  component: RouteComponent,
});

function RouteComponent() {
  return <HorizontallScroll></HorizontallScroll>;
}
