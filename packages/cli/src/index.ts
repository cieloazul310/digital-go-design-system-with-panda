#!/usr/bin/env node

import { addSnippets } from "./add-snippets";
// import { updateComponents } from "./update";

const [, , cmd, ...args] = process.argv;

(async () => {
  switch (cmd) {
    case "add":
      await addSnippets(args);
      break;
    /*
    case "update":
      await updateComponents(args);
      break;
    */
    default:
      console.log("Usage: digital-go-pandacss <add|update> [options]");
      process.exit(1);
  }
  process.exit(0);
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
