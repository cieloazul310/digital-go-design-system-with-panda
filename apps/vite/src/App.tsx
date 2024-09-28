import { css } from "@import-map-package/styled-system/css";
import { Container, Stack } from "@import-map-package/styled-system/jsx";
import { link } from "@import-map-package/styled-system/recipes";
import { Button } from "@cieloazul310/digital-go-pandacss/button";
import { Divider } from "@cieloazul310/digital-go-pandacss";

function App() {
  return (
    <Container maxWidth="breakpoint-lg">
      <h1 className={css({ textStyle: "dsp-64N-4" })}>Hello from Panda 🐼</h1>
      <Divider color="grey-536" />
      <h2
        className={css({ textStyle: "dsp-48N-4", my: 4, color: "yellow.400" })}
      >
        module-resolution/with-import-map-package
      </h2>
      <p>
        <a className={link()} href="https://cieloazul310.github.io">
          リンク
        </a>
      </p>
      <Divider />
      <Stack
        gap={2}
        direction={{ base: "column", md: "row" }}
        alignItems={{ base: "start", md: "center" }}
      >
        <Button variant="outline" size="lg">
          Outline Large
        </Button>
        <Button size="md">Solid Medium</Button>
        <Button variant="text" size="sm">
          Text
        </Button>
      </Stack>
      <Divider color="black" />
      <Stack
        gap={2}
        direction={{ base: "column", md: "row" }}
        alignItems={{ base: "start", md: "center" }}
      >
        <Button variant="outline" size="lg" asChild>
          <a href="https://cieloazul310.github.io">Outline Large</a>
        </Button>
      </Stack>
    </Container>
  );
}

export default App;
