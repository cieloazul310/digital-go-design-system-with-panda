import { css } from "@import-map-package/styled-system/css";
import { Container, HStack } from "@import-map-package/styled-system/jsx";
import { Button } from "@import-map-package/ui-lib";

function App() {
  return (
    <Container maxWidth="breakpoint-lg">
      <h1 className={css({ textStyle: "dsp-48N-4" })}>Hello from Panda 🐼</h1>
      <h2 className={css({ fontSize: "2xl", my: 4, color: "yellow.400" })}>
        module-resolution/with-import-map-package
      </h2>
      <HStack gap={2}>
        <Button variant="outline" size="lg">
          Outline Large
        </Button>
        <Button size="md">Solid Medium</Button>
        <Button variant="text" size="sm">
          Text
        </Button>
      </HStack>
    </Container>
  );
}

export default App;
