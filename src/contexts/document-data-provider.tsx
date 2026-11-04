"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { DocumentsData } from "@/lib/types";
import { fetchDocumentsData } from "@/app/actions";

interface DocumentsDataContextData {
  yearSelected: string;
  setYearSelected: (year: string) => void;
  documentsData: DocumentsData;
  isFetching: boolean;
}

const DocumentsDataContext = createContext<
  DocumentsDataContextData | undefined
>(undefined);

export function DocumentsDataProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const initialYear = process.env.NEXT_PUBLIC_CURRENT_MANDATE!;
  const [yearSelected, setYearSelected] = useState<string>(initialYear);
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [documentsData, setDocumentsData] = useState<DocumentsData>([]);

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const [yd, sd] = await Promise.all([
          fetchDocumentsData(yearSelected),
          fetchDocumentsData("shared"),
        ]);
        setDocumentsData([...yd, ...sd]);
      } catch (error) {
        console.error("Error fetching documents data: ", error);
      } finally {
        setIsFetching(false);
      }
    }
    void fetchData();
  }, [yearSelected]);

  return (
    <DocumentsDataContext.Provider
      value={{
        yearSelected,
        setYearSelected,
        documentsData,
        isFetching,
      }}
    >
      {children}
    </DocumentsDataContext.Provider>
  );
}

export function useSetDocumentsYear(): (year: string) => void {
  const context = useContext(DocumentsDataContext);
  if (context === undefined) {
    throw new Error(
      "useSetDocumentsYear() must be used within a DocumentsDataProvider",
    );
  }
  return context.setYearSelected;
}

export function useDocumentsData(): DocumentsData {
  const context = useContext(DocumentsDataContext);
  if (context === undefined) {
    throw new Error(
      "useDocumentsData() must be used within a DocumentsDataProvider",
    );
  }
  return context.documentsData;
}

export function useDocumentsFetching(): boolean {
  const context = useContext(DocumentsDataContext);
  if (context === undefined) {
    throw new Error(
      "useDocumentsFetching() must be used within a DocumentsDataProvider",
    );
  }
  return context.isFetching;
}

export function useDocumentsYear(): string {
  const context = useContext(DocumentsDataContext);
  if (context === undefined) {
    throw new Error(
      "useDocumentsYear() must be used within a DocumentsDataProvider",
    );
  }
  return context.yearSelected;
}
