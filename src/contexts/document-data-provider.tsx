"use client";

import type { DocumentsData } from "@/lib/types";
import { useContext, createContext, useState, useEffect } from "react";

interface DocumentDataContext {
  yearSelected: string;
  setYearSelected: (year: string) => void;
  documentsData: DocumentsData;
  isFetching: boolean;
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
  const [isFetching, setFetchingState] = useState<boolean>(true);
  const [documentsData, setDocumentsData] = useState<DocumentsData>([]);

  useEffect(() => {
    async function fetchDocs() {
      setFetchingState(true);
      try {
        const docsData: DocumentsData = []; // TODO: missing the implementation for fetching documents
        setDocumentsData(docsData);
      } catch (error) {
        console.log("Error fetching documents data: ", error);
      }
      setFetchingState(false);
    }
    void fetchDocs();
  }, [yearSelected]);

  return (
    <DocumentsContext.Provider
      value={{
        yearSelected,
        setYearSelected,
        documentsData,
        isFetching,
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

export function useFetchingState() {
  const context = useContext(DocumentsContext);
  if (context === undefined) {
    throw new Error(
      "getFetchingState() can only be used insied a DocumentsDataProvider",
    );
  }
  return context.isFetching;
}
