export default function AboutSection({
  children,
  dark,
  stretch,
}: {
  children: React.ReactNode;
  dark?: boolean;
  stretch?: boolean;
}) {
  return (
    <div
      className={`flex h-full border-b border-black/10 ${dark ? "bg-muted" : ""} ${stretch ? "" : "layout-p-x"}`}
    >
      {children}
    </div>
  );
}
