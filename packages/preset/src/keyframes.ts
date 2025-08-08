export const keyframes = {
  "circular-progress": {
    "0%": {
      strokeDasharray: "1, 400",
      strokeDashoffset: "0",
    },
    "50%": {
      strokeDasharray: "400, 400",
      strokeDashoffset: "-100%",
    },
    "100%": {
      strokeDasharray: "400, 400",
      strokeDashoffset: "-260%",
    },
  },
  position: {
    from: {
      insetInlineStart: "var(--animate-from-x)",
      insetBlockStart: "var(--animate-from-y)",
    },
    to: {
      insetInlineStart: "var(--animate-to-x)",
      insetBlockStart: "var(--animate-to-y)",
    },
  },
};
