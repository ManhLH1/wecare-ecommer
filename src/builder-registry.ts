"use client";
import { builder, Builder } from "@builder.io/react";
import DataverseContent from "../components/DataverseContent";
import Page from "./app/[...page]/[...page]";
import content_temp from "./components/content_temp/content_temp";
import contentDefault from "./components/context-default/content-default";
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(DataverseContent, {
  name: "DataverseContent",
});

Builder.registerComponent(content_temp, {
  name: "content_temp",
});
Builder.registerComponent(content_temp, {
  name: "content_temp",
});

Builder.registerComponent(contentDefault, {
  name: "contentDefault",
});

Builder.registerComponent(Page, {
  name: "Page",
  inputs: [
    {
      name: "params",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "{ page: string[]; }",
      },
      required: true,
    },
  ],
});
