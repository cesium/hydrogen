"use client";

import type { DocumentsData } from "@/lib/types";
import { useContext, createContext, useState, useEffect } from "react";

interface DocumentDataContext {
  yearSelected: string;
  setYearSelected: (year: string) => void;
  documentsData: DocumentsData;
}

const DocumentsContext = createContext<DocumentDataContext | undefined>(
  undefined,
);

export function DocumentsDataProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const initialYear = process.env.NEXT_PUBLIC_CURRENT_MANDATE!;
  const [yearSelected, setYearSelected] = useState<string>(initialYear);
  const [documentsData, setDocumentsData] = useState<DocumentsData>([]);

  useEffect(() => {
    async function fetchDocs() {
      try {
        const docsData: DocumentsData = [];
        setDocumentsData(docsData);
      } catch (error) {
        console.log("Error fetching documents data: ", error);
      }
    }
    void fetchDocs();
  }, [yearSelected]);

  return (
    <DocumentsContext.Provider
      value={{
        yearSelected,
        setYearSelected,
        documentsData
      }}
    >
      {children}
    </DocumentsContext.Provider>
  );
}

export function useSetYear() {
  const context = useContext(DocumentsContext);
  if (context === undefined) {
    throw new Error(
      "selectYear() can only be used insied a DocumentsDataProvider",
    );
  }
  return context.setYearSelected;
}

export function useDocumentsData() {
  const context = useContext(DocumentsContext);
  if (context === undefined) {
    throw new Error(
      "getDocumentsData() can only be used insied a DocumentsDataProvider",
    );
  }
  return context.documentsData;
}