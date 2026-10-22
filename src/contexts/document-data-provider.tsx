"use client";

import type { DocumentsData } from "@/lib/types";
import { useContext, createContext, useState, useEffect, useRef } from "react";
import { fetchDocumentsData } from "@/app/actions";

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

  const sharedDocsRef = useRef<DocumentsData | null>(null);

  useEffect(() => {
    async function fetchDocs() {
      setFetchingState(true);
      try {
        const sharedPromise = sharedDocsRef.current
          ? Promise.resolve(sharedDocsRef.current)
          : fetchDocumentsData("shared");
        const [yearsDocs, sharedDocs] = await Promise.all([
          fetchDocumentsData(yearSelected),
          sharedPromise,
        ]);
        sharedDocsRef.current = sharedDocs;
        setDocumentsData([...yearsDocs, ...sharedDocs]);
      } catch (error) {
        console.log("Error fetching documents data: ", error);
      } finally {
        setFetchingState(false);
      }
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
      "selectYear() can only be used inside a DocumentsDataProvider",
    );
  }
  return context.setYearSelected;
}

export function useDocumentsData() {
  const context = useContext(DocumentsContext);
  if (context === undefined) {
    throw new Error(
      "getDocumentsData() can only be used inside a DocumentsDataProvider",
    );
  }
  return context.documentsData;
}

export function useFetchingState() {
  const context = useContext(DocumentsContext);
  if (context === undefined) {
    throw new Error(
      "getFetchingState() can only be used inside a DocumentsDataProvider",
    );
  }
  return context.isFetching;
}

export function useYearSelected() {
  const context = useContext(DocumentsContext);
  if (context === undefined) {
    throw new Error(
      "useYearSelected() can only be used inside a DocumentsDataProvider",
    );
  }
  return context.yearSelected;
}
