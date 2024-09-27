export default {
  "**/*.{js,mjs,cjs,tsx,ts,tsx}": [
    "eslint --fix",
    "prettier --parser typescript --write",
  ],
};
