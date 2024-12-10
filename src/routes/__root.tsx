import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

// FOnts
import "../../index.css";
import "../assets/fonts/DynaPuff/DynaPuff-VariableFont_wdth,wght.ttf";
import "../assets/fonts/BricolageGrotesque/BricolageGrotesque-VariableFont_opsz,wdth,wght.ttf";
import { NavBar } from "../components/molecules/NavBar";
import { FullScreenBackground } from "../components/atoms/Screen/FullscreenBackground";
import { ContentWrapper } from "../components/atoms/Screen/ContentWrapper";
import { NotFound } from "../components/molecules/NotFound";

export const Route = createRootRoute({
  notFoundComponent: NotFound,
  component: () => (
    <FullScreenBackground>
      <NavBar />
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
      <TanStackRouterDevtools />
    </FullScreenBackground>
  ),
});
