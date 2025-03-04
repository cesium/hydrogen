import { horizontalPadding } from "@/lib/styling";

export default function AboutSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`flex h-full border-b border-black/10 ${horizontalPadding}`}
    >
      {children}
    </div>
  );
}
