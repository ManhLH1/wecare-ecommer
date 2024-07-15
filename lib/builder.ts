import { builder, Builder } from "@builder.io/react";

builder.init("72645f1c581446d9b326ff62153df84b");

Builder.setQueryParams({
  noTargeting: "true",
  cachebust: process.env.NODE_ENV !== "production",
});

export { builder, Builder };
