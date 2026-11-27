import type { DocumentsData, OrderCriteria } from "@/lib/types";
import { useCurrentTab } from "@/components/tabs";
import Document from "@/components/document";
import { useDictionary } from "@/contexts/dictionary-provider";

const DocumentList = ({
  documents,
  order,
}: {
  documents: DocumentsData;
  order: OrderCriteria;
}) => {
  const dict = useDictionary();
  const category = useCurrentTab();
  const filteredDocuments =
    category === "all"
      ? documents
      : documents.filter((document) => document.categories.includes(category));
  const orderedDocuments = [...filteredDocuments].sort(order.sort);

  if (orderedDocuments.length === 0) {
    return (
      <div className="w-full items-center p-10 text-center font-title">
        {dict.documents.noDocuments}
      </div>
    );
  }

  return (
    <>
      {orderedDocuments.map((document) => (
        <Document key={document.documentUrl} {...document} />
      ))}
    </>
  );
};

export default DocumentList;
