"use client"
import { useDictionary } from "@/contexts/dictionary-provider";

export default function Documents() {
      const dict = useDictionary();
    
    return (
        <main>
            <h1 className="font-title text-3xl font-mediumpx-2 md:px-5">
                {dict.documents.title}

            </h1>
        </main>
    )
}