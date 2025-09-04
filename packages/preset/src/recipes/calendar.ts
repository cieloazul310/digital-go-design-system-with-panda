import { defineSlotRecipe } from "@pandacss/dev";
import { anatomy as datePickerAnatomy } from "@zag-js/date-picker";
// import button from "./button";
import selectBox from "./select-box";

export default defineSlotRecipe({
  className: "calendar",
  slots: datePickerAnatomy
    .omit("input", "trigger", "positioner", "label")
    .keys(),
  base: {
    root: {
      colorPalette: "keyColor",
    },
    content: {
      /**
       * flex flex-col items-center w-max
       */
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "max-content",
    },
    viewControl: {
      /**
       * flex items-center gap-2 p-4
       */
      display: "flex",
      alignItems: "center",
      gap: 2,
      p: 4,
    },
    yearSelect: {
      ...selectBox.base,
      ...selectBox.variants?.size?.md,
      width: "fit-content",
    },
    monthSelect: {
      ...selectBox.base,
      ...selectBox.variants?.size?.md,
      width: "fit-content",
    },
    table: {
      /**
       * mx-3 mb-2
       */
      mx: 3,
      mb: 2,
    },
    tableHead: {
      /**
       * [&_th]:p-0
       */
      "& th": {
        p: 0,
      },
    },
    tableHeader: {
      /**
       * size-12 text-center font-bold
       */
      width: 12,
      height: 12,
      textAlign: "center",
      fontWeight: "bold",
    },
    tableBody: {
      /**
       * [&_td]:p-0
       */
      "& td": {
        p: 0,
      },
    },
    tableCellTrigger: {
      /**
       * m-1 flex items-center justify-center size-10 rounded-full
       * underline-offset-[calc(3/16*1rem)] hover:bg-solid-gray-50 hover:underline
       * data-[selected]:!bg-blue-900 data-[selected]:border
       * data-[selected]:border-transparent data-[selected]:text-white
       * focus-visible:bg-yellow-300 focus-visible:outline focus-visible:outline-4
       * focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)]
       * focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300
       */
      m: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 10,
      height: 10,
      rounded: "full",
      textUnderlineOffset: "calc(3 / 16 * 1rem)",
      textDecoration: { _hover: "underline" },
      bg: {
        _hover: { base: "solid-gray.50", _disabled: "transparent" },
        _selected: {
          base: "colorPalette.primary",
          _hover: "colorPalette.primary",
          _disabled: "transparent",
        },
      },
      color: { _selected: "white", _disabled: "solid-gray.300" },
      cursor: "pointer",
      borderWidth: { _selected: "1px" },
      borderColor: { _selected: "transparent" },
    },
  },
});
