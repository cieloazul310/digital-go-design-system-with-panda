import { defineUtility } from "@pandacss/dev";

const borderInset = defineUtility({
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
      boxShadow: `inset 0 0 0 ${width} ${token("colors.ring.300")}`,
    };
  },
});

const utilities = {
  borderInset,
}

export default utilities;
