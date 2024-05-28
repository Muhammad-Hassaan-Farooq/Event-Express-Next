import { Text } from "./Text";
import { Button } from "./Button";
import { useNode, Element } from "@craftjs/core";
import { Container } from "./Container";

export const Card = ({ background, padding = 20 }) => {
  return (
    <Container background={background} padding={padding}>
      <Text text="Title" fontSize={20} />
      <Text text="Subtitle" fontSize={15} />

      <Button size="small" variant="contained" color="primary">
        Learn more
      </Button>
    </Container>
  );
};
