import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import { FullScreenBackground } from "../components/shared/Screen/FullscreenBackground";
import { ContentWrapper } from "../components/shared/Screen/ContentWrapper";

// FOnts
import "../../index.css";
import "../assets/fonts/DynaPuff/DynaPuff-VariableFont_wdth,wght.ttf";
import "../assets/fonts/BricolageGrotesque/BricolageGrotesque-VariableFont_opsz,wdth,wght.ttf";
import { TopBar } from "../components/shared/NavBar/TopBar";

export const Route = createRootRoute({
  component: () => (
    <FullScreenBackground>
      <TopBar />
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
      <TanStackRouterDevtools />
    </FullScreenBackground>
  ),
});
