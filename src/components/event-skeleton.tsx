export function EventSkeleton() {
  return (
    <div className="flex animate-pulse items-start gap-4 border-b border-black/20 py-6">
      <div className="h-[4.5rem] w-[4.5rem] rounded-xl bg-gray/10"></div>
      <div className="flex-1">
        <div className="mb-4 h-6 w-1/2 rounded bg-gray/10 md:w-1/3"></div>
        <div className="space-y-2">
          <div className="h-4 w-full rounded bg-gray/10 md:w-1/4"></div>
          <div className="h-4 w-full rounded bg-gray/10 md:w-1/5"></div>
          <div className="h-4 w-full rounded bg-gray/10 md:w-1/3"></div>
        </div>
      </div>
    </div>
  );
}
