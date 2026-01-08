import { defineRecipe } from "@pandacss/dev";

export default defineRecipe({
  className: "blockquote",
  base: {
    /**
     * margin: 0 calc(40 / 16 * 1rem);
     * border-left: 8px solid var(--color-neutral-solid-gray-536);
     * padding-top: calc(8 / 16 * 1rem);
     * padding-right: calc(16 / 16 * 1rem);
     * padding-bottom: calc(8 / 16 * 1rem);
     * padding-left: calc(24 / 16 * 1rem);
     */
    my: 0,
    mx: 10,
    borderLeftWidth: "8px",
    borderColor: "solid-gray.536",
    pt: 2,
    pr: 4,
    pb: 2,
    pl: 6,
    "& > *:first-child": {
      mt: 0,
    },
    "& > *:last-child": {
      mb: 0,
    },
  },
});
