"use client";

import { useState, useEffect } from "react";
import { builder, BuilderComponent } from "@builder.io/react";
import DataverseContent from "../../components/DataverseContent";
import content_temp from "../components/content_temp/content_temp";

export default function Home() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    builder.get("page", { url: "/" }).then(setContent);
  }, []);

  return (
    <main>
      {content ? (
        <BuilderComponent model="page" content={content} />
      ) : (
        <DataverseContent />
      )}
    </main>
  );
}
