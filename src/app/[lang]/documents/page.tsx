"use client";
import { useDictionary } from "@/contexts/dictionary-provider";

export default function Documents() {
  const dict = useDictionary();

  return (
    <main className="layout-p-full">
      <h1 className="font-medium font-title text-3xl">
        {dict.documents.title}
      </h1>
    </main>
  );
}
