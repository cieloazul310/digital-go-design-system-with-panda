import { defineSlotRecipe } from "@pandacss/dev";
import { cardAnatomy } from "../anatomy";

export default defineSlotRecipe({
  className: "card",
  slots: cardAnatomy.keys(),
  base: {
    root: {
      display: "grid",
      gridTemplateAreas: `
        "image"
        "main"
        "sub"
      `,
      bg: { base: "white", "&:has(input:checked)": "colorPalette.50" },
      color: "solid-gray.800",
      textStyle: "std-16N-170",
      borderColor: "solid-gray.420",
      borderWidth: "1px",
      rounded: 16,
      overflow: "hidden",
      colorPalette: "keyColor",
    },
    main: {
      gridArea: "main",
      py: 4,
      px: { base: 4, md: 6 },
      display: "flex",
      flexDirection: "column",
      gap: 4,
      _focusVisible: {
        outlineStyle: "solid",
        outlineWidth: "4px",
        outlineColor: "black",
        outlineOffset: "calc(2 / 16 * 1rem)",
        focusRing: "calc(2 / 16 * 1rem)",
      },
    },
    image: {
      gridArea: "image",
      position: "relative",
      overflow: "hidden",
      "& > img": {
        objectFit: "cover",
        width: "full",
        height: "full",
      },
    },
    sub: {
      gridArea: "sub",
      py: 4,
      px: { base: 4, md: 6 },
    },
    title: {
      textStyle: "std-20B-150",
      color: "solid-gray.900",
    },
  },
  variants: {
    orientation: {
      vertical: {
        root: {
          gridTemplateAreas: `
            "image"
            "main"
            "sub"
          `,
          gridTemplateColumns: "1fr",
        },
      },
      horizontal: {
        root: {
          gridTemplateAreas: `
            "image main"
            "image sub"
          `,
          gridTemplateColumns: "minmax(auto, 320px) 1fr",
        },
      },
    },
    asLink: {
      true: {
        root: {
          position: "relative",
          bg: {
            _hover: "solid-gray.50",
          },
        },
        image: {
          "& > img": {
            transition: "transform",
            _groupHover: {
              transform: "scale(1.05)",
            },
          },
        },
        sub: {
          "& > *": {
            zIndex: 1,
          },
        },
        title: {
          _before: {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "full",
            height: "full",
            zIndex: 0,
            cursor: "inherit",
          },
        },
      },
    },
  },
  defaultVariants: {
    orientation: "vertical",
    asLink: false,
  },
});
