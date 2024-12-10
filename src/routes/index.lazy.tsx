import { createLazyFileRoute } from "@tanstack/react-router";
import { Card } from "../components/atoms/Card/Card";
import { useTheme } from "../hooks/useTheme";

export const Route = createLazyFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { theme } = useTheme();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <Card center>
        <h1>Hej!</h1>
        <p>
          Det finns lite bakgrund till projektet längst ner i readmeen. Denna
          sida handlar mest om musik, för jag gillar musik. Ganska mycket.
        </p>
      </Card>
      <Card width="200px" backgroundColor={theme.palette.primary} center>
        <h2>Jag gillar att lyssna på musik</h2>
        <p>(mina rekommendationer)</p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            gap: theme.spacing.s,
            flexWrap: "wrap",
          }}
        >
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/track/2jQqWeTGRRpLkUxWQEJx5s?utm_source=generator"
            width="250"
            height="352"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/track/5FStSEfqYEpDwFfGsiAdQ8?utm_source=generator"
            width="250"
            height="352"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/track/1U1TpPbxYRFteIeT0Az4kM?utm_source=generator"
            width="250"
            height="352"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/track/2bTvNKT8bxyyPhzHu4A2Wx?utm_source=generator"
            width="250"
            height="352"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
      </Card>
      <Card backgroundColor={theme.palette.accent} center>
        <p>Och så min spellista såklart</p>
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/playlist/2xVQjXK70wm3R5QQp08yFN?utm_source=generator"
          width="100%"
          height="352"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </Card>
    </div>
  );
}
