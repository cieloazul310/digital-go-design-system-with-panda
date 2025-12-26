import { defineSlotRecipe } from "@pandacss/dev";
import { anatomy as fileUploadAnatomy } from "@zag-js/file-upload";
import label from "./label";
import link from "./link";

export default defineSlotRecipe({
  className: "file-upload",
  slots: fileUploadAnatomy.extendWith("itemDetail").keys(),
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
      gap: 4,
      textStyle: "std-16N-170",
    },
    dropzone: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      width: "full",
      minHeight: "208px",
      bg: { base: "solid-gray.bg", _dragging: "green.50" },
      outlineStyle: "solid",
      outlineColor: {
        base: "solid-gray.536",
        _dragging: "success.1",
        _invalid: "error.1",
      },
      outlineWidth: { base: "1px", _dragging: "4px" },
      rounded: 8,
      pt: 8,
      pb: 6,
      pl: 7,
      pr: 8,
    },
    trigger: {
      flexShrink: 0,
    },
    label: {
      ...label.base,
      textStyle: "std-17B-170",
    },
    itemGroup: {
      display: "flex",
      flexDirection: "column",
      gap: 1,
      listStyle: "inside deciminal",
    },
    item: {
      display: "list-item",
      color: {
        base: "solid-gray.600",
        "[data-status=rejected]": "error.1",
        _marker: "solid-gray.600",
      },
      "& > *": {
        display: "inline",
        mr: { base: 2, _last: 0 },
      },
    },
    itemDetail: {
      color: { base: "solid-gray.600", "[data-status=rejected] &": "error.1" },
      borderLeftWidth: { base: "0px", "[data-status=rejected] &": "4px" },
      borderColor: "currentcolor",
      pl: { base: 0, "[data-status=rejected] &": 2 },
      display: "inline-block",
      verticalAlign: "text-top",
    },
    itemName: {
      textStyle: "std-16B-170",
      color: { base: "solid-gray.800", "[data-status=rejected] &": "error.1" },
    },
    itemDeleteTrigger: {
      ...link.base,
      cursor: "pointer",
    },
  },
});
