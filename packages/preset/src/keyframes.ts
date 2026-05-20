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
  "fade-in": {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  },
  "fade-out": {
    from: {
      opacity: 1,
    },
    to: {
      opacity: 0,
    },
  },
  "slide-in-bottom": {
    from: {
      transform: "translate3d(0, 100%, 0)",
    },
    to: {
      transform:
        "translate3d(var(--drawer-translate-x, 0), var(--drawer-translate-y, 0), 0)",
    },
  },
  "slide-out-bottom": {
    from: {
      transform:
        "translate3d(var(--drawer-translate-x, 0), var(--drawer-translate-y, 0), 0)",
    },
    to: {
      transform: "translate3d(0, 100%, 0)",
    },
  },
  "slide-in-top": {
    from: {
      transform: "translate3d(0, -100%, 0)",
    },
    to: {
      transform:
        "translate3d(var(--drawer-translate-x, 0), var(--drawer-translate-y, 0), 0)",
    },
  },
  "slide-out-top": {
    from: {
      transform:
        "translate3d(var(--drawer-translate-x, 0), var(--drawer-translate-y, 0), 0)",
    },
    to: {
      transform: "translate3d(0, -100%, 0)",
    },
  },
  "slide-in-left": {
    from: {
      transform: "translate3d(-100%, 0, 0)",
    },
    to: {
      transform:
        "translate3d(var(--drawer-translate-x, 0), var(--drawer-translate-y, 0), 0)",
    },
  },
  "slide-out-left": {
    from: {
      transform:
        "translate3d(var(--drawer-translate-x, 0), var(--drawer-translate-y, 0), 0)",
    },
    to: {
      transform: "translate3d(-100%, 0, 0)",
    },
  },
  "slide-in-right": {
    from: {
      transform: "translate3d(100%, 0, 0)",
    },
    to: {
      transform:
        "translate3d(var(--drawer-translate-x, 0), var(--drawer-translate-y, 0), 0)",
    },
  },
  "slide-out-right": {
    from: {
      transform:
        "translate3d(var(--drawer-translate-x, 0), var(--drawer-translate-y, 0), 0)",
    },
    to: {
      transform: "translate3d(100%, 0, 0)",
    },
  },
};
