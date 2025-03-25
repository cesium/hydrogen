import { horizontalPadding } from "@/lib/styling";

export default function AboutSection({
  children,
  dark,
  horizontalpadding,
  padding,
}: {
  children: React.ReactNode;
  dark?: boolean;
  horizontalpadding?: boolean;
  padding?: boolean;
}) {
  return (
    <div
      className={`flex h-full border-b border-black/10 ${padding == true ? "md:pl-[70px]" : ""}  ${dark ? "bg-[#fafafa]" : ""} ${horizontalpadding == true ? horizontalPadding : ""}`}
    >
      {children}
    </div>
  );
}
