export default function AboutSection({
  children,
  dark,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <div
      className={`flex h-full border-b border-black/10 ${dark ? "bg-muted" : ""} layout-p-x`}
    >
      {children}
    </div>
  );
}
