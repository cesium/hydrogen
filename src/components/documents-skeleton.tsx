"use client";

import Scrollable from "./scrollable";

export default function DocumentsSkeleton() {
  return (
    <>
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          className="my-auto grid w-full animate-pulse grid-cols-1 border-b border-stroke py-5 md:grid-cols-[1fr_auto]"
        >
          <div className="flex min-w-0 flex-row gap-4 md:col-start-1 md:row-start-1">
            <div className="flex h-auto w-16 items-center text-gray">
              <span className="material-symbols-outlined text-6xl">
                insert_drive_file
              </span>
            </div>
            <div className="flex min-w-0 flex-col items-start justify-center object-center">
              <div className="mb-1 line-clamp-2 h-5 w-48 rounded bg-gray/10 text-base font-bold leading-tight" />
              <div className="text-gray-500 flex w-full min-w-0 flex-col items-center gap-1 text-sm md:flex-row">
                <div className="my-1 flex items-center py-0.5">
                  <span className="material-symbols-outlined mr-1 text-[18px]">
                    calendar_month
                  </span>
                  <div className="h-4 w-24 rounded bg-gray/10" />
                </div>
                <Scrollable overflows className="w-full min-w-0">
                  <div className="my-1 flex w-max flex-row flex-nowrap justify-start">
                    {[1, 2].map((_, index) => (
                      <div
                        key={index}
                        className=" mr-2 flex h-6 w-24 rounded-full bg-gray/10 px-2 py-0.5  md:ml-2 md:mr-0"
                      ></div>
                    ))}
                  </div>
                </Scrollable>
              </div>
            </div>
          </div>
          <div className="row-start-3 mt-2 flex flex-row items-center justify-start gap-2 md:col-start-2 md:row-start-1 md:mt-0 md:justify-end md:gap-3">
            <div className="h-12 w-36 rounded-full bg-gray/10" />
            <div className="h-12 w-36 rounded-full bg-gray/10" />
          </div>
        </div>
      ))}
    </>
  );
}
