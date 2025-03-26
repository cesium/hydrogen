"use client";
import Button from "@/components/button";
import { horizontalPaddingL, verticalPadding } from "@/lib/styling";
import AppLink from "@/components/link";
import { useDictionary } from "@/contexts/dictionary-provider";

export default function NotFound() {
  const dict = useDictionary();

  return (
    <main
      className={`${horizontalPaddingL} ${verticalPadding} flex flex-col items-center justify-between gap-10 overflow-hidden lg:flex-row`}
    >
      <div className="flex flex-col gap-6 pb-32 pt-52">
        <div className="flex max-w-3xl flex-col gap-4">
          <h1 className="font-title text-3xl font-medium">Ups...</h1>
          <p>{dict.not_found.description}</p>
        </div>
        <div className="flex w-fit gap-5">
          <Button
            title={dict.not_found.go_to_start}
            href="/"
            color="primary"
            style="style3"
          />
          <AppLink
            title={dict.not_found.contact_us}
            href="mailto:cesium@di.uminho.pt"
          />
        </div>
      </div>
      <span className="-mb-28 -mr-16 bg-gradient-to-r from-transparent from-5% to-black/20 bg-clip-text font-title text-[165px] font-medium text-transparent sm:-mb-44 sm:text-[235px] lg:mb-0">
        404
      </span>
    </main>
  );
}
