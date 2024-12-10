import { Card } from "../Card/Card";
import { Text } from "../Text/Text";

export const NotFound = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card center>
        <iframe
          src="https://giphy.com/embed/l2QZPyTZAiSTKH3QQ"
          width="480"
          height="259"
          allowFullScreen
        ></iframe>
        <Text>
          <a href="https://giphy.com/gifs/travolta-john-hotline-bling-l2QZPyTZAiSTKH3QQ">
            via GIPHY
          </a>
        </Text>
        <Text>404</Text>
      </Card>
    </div>
  );
};
