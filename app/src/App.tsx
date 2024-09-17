import { css, cx } from "@import-map-package/styled-system/css";
import { Stack, Container } from "@import-map-package/styled-system/jsx";
import { button } from "@import-map-package/styled-system/recipes";
import { Button } from "@import-map-package/ui-lib";

function App() {
  return (
    <Container maxWidth="breakpoint-lg">
      <h1 className={css({ fontSize: "4xl", lineHeight: "1.1" })}>
        Hello from Panda 🐼
      </h1>
      <h2 className={css({ fontSize: "2xl", my: 4, color: "yellow.400" })}>
        module-resolution/with-import-map-package
      </h2>
      <Stack>
        <Button>Button component from ui-lib</Button>
        <Button visual="funky" shape="square" size="lg">
          Button component from ui-lib
        </Button>
        <button
          className={cx(
            button(),
            css({
              bgColor: "teal.400",
              color: "rgba(0, 0, 0, 0.8)",
              fontWeight: "bold",
            }),
          )}
        >
          button recipe from ui-lib, with local overrides
        </button>
      </Stack>
    </Container>
  );
}

export default App;
