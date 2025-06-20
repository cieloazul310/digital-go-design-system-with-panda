import { defineUtility } from "@pandacss/dev";

const borderInset = defineUtility({
  deprecated: true,
  className: "border-inset",
  values: ["xs", "sm", "md", "lg", "xl"],
  transform(value, { token }) {
    const width = (() => {
      if (value === "xs") return "1px";
      if (value === "sm") return "2px";
      if (value === "lg") return "4px";
      if (value === "xl") return "8px";
      return "3px";
    })();

    return {
      boxShadow: `inset 0 0 0 ${width} ${token("colors.ring")}`,
    };
  },
});

const focusRing = defineUtility({
  className: "ring",
  values: "borderWidths",
  transform(value, { token }) {
    return {
      boxShadow: `0 0 0 ${value} ${token("colors.ring")}`,
    };
  },
});

const utilities = {
  borderInset,
  focusRing,
};

export default utilities;
