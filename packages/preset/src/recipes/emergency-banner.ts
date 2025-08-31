/**
 * https://github.com/digital-go-jp/design-system-example-components-react/blob/main/src/components/EmergencyBanner/EmergencyBanner.tsx
 * https://github.com/digital-go-jp/design-system-example-components-html/blob/main/src/components/emergency-banner/emergency-banner.css
 */
import { defineSlotRecipe } from "@pandacss/dev";
import { emergencyBannerAnatomy } from "../anatomy";

export default defineSlotRecipe({
  className: "emergency-banner",
  slots: emergencyBannerAnatomy.keys(),
  base: {
    root: {
      /**
       * block px-2.5 py-3.5 border-[6px] bg-white desktop:p-[calc(26/16*1rem)] border-warning-orange-1
       */
      display: "block",
      px: { base: 2.5, md: "calc(26 / 16 * 1rem)" },
      py: { base: 3.5, md: "calc(26 / 16 * 1rem)" },
      bg: "white",
      borderWidth: "6px",
      borderColor: "warning.orange.1",
      color: "solid-gray.800",
    },
    heading: {
      /**
       * text-std-20B-150 text-black desktop:text-std-24B-150
       */
      color: "black",
      textStyle: { base: "std-20B-150", md: "std-24B-150" },
      _before: {
        content: '"【緊急】"',
      },
    },
    body: {
      /**
       * mt-2 desktop:mt-4
       */
      mt: { base: 2, md: 4 },
    },
    action: {
      pt: { base: "calc(8 / 16 * 1rem)", md: "calc(12 / 16 * 1rem)" },
      pb: { md: "calc(4 / 16 * 1rem)" },
      display: { md: "flex" },
      justifyContent: { md: "flex" },
    },
    button: {
      /**
       * relative block mx-auto
       * p-[calc(18/16*1rem)] desktop:p-5
       * w-full desktop:w-fit
       * desktop:min-w-[50%]
       * border-2 desktop:border-4 border-transparent
       * bg-error-1 hover:bg-error-2
       * text-white text-oln-16B-100 text-center
       * rounded-12 desktop:rounded-16
       * after:absolute after:inset-0 after:border-white
       * after:border-2 desktop:after:border-4
       * after:rounded-[calc(10/16*1rem)] desktop:after:rounded-12
       * hover:underline hover:underline-offset-[calc(3/16*1rem)]
       * focus-visible:outline focus-visible:outline-[calc(4/16*1rem)]
       * focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)]
       * focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300
       */
      position: "relative",
      display: "block",
      mx: "auto",
      p: { base: "calc(18 / 16 * 1rem)", md: 5 },
      width: { base: "full", md: "fit-content" },
      minWidth: "50%",
      borderWidth: { base: "2px", md: "4px" },
      borderColor: "transparent",
      bg: { base: "error.1", _hover: "error.2" },
      color: "white",
      textStyle: "oln-16B-100",
      textAlign: "center",
      rounded: { base: 12, md: 16 },
      _hover: {
        textDecoration: "underline",
        textUnderlineOffset: "calc(3 / 16 * 1rem)",
      },
      _after: {
        content: '""',
        position: "absolute",
        inset: 0,
        borderColor: "white",
        borderWidth: { base: "2px", md: "4px" },
        rounded: { base: "calc(10 / 16 * 1rem)", md: 12 },
      },
      _focusVisible: {
        outlineStyle: "solid",
        outlineWidth: "4px",
        outlineColor: "black",
        outlineOffset: "calc(2 / 16 * 1rem)",
        focusRing: "calc(2 / 16 * 1rem)",
      },
    },
  },
});
