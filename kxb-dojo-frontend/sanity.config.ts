// Config to generate Sanity Studio under /admin

import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "hir8lmw6",
  dataset: "production",
  title: "KXB Dojo",
  apiVersion: "2023-07-26",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
