import { horizontalPadding } from "@/lib/styling";

export default function AboutSection({
  children,
  dark
}: {
  children: React.ReactNode;
  dark?: boolean;
  horizontalpadding?: boolean;
  padding?: boolean;
}) {
  return (
    <div
      className={`flex h-full border-b border-black/10 ${dark ? "bg-muted" : ""} ${horizontalPadding}`}
    >
      {children}
    </div>
  );
}
