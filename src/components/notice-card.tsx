"use client";

import { useDictionary } from "@/contexts/dictionary-provider";
import { NoticeType } from "@/lib/types";
import Button from "./button";

interface CardProps {
  type: NoticeType;
  /**
   * When true, disables desktop-specific responsive styles,
   * keeping mobile layout across all screen sizes.
   * @default false
   */
  mobileOnlyLayout?: boolean;
}

const getColor = (type: NoticeType) => {
  return type === NoticeType.Partnerships ? "black" : "";
};

const NoticeCard = ({ type, mobileOnlyLayout }: CardProps) => {
  const dict = useDictionary();
  const color = getColor(type);

  return (
    <div
      className={`relative flex h-full min-h-60 w-full flex-col items-center justify-between gap-4 overflow-hidden rounded-2xl p-6 text-white ${!mobileOnlyLayout ? "min-[950px]:min-h-0 min-[950px]:flex-row min-[950px]:p-8" : ""} ${type == NoticeType.Partnerships ? "bg-black/[0.06]" : `bg-${color}`} selection:bg-white/30`}
    >
      {/* Descriptive text */}
      <div
        className={`left-2 right-0 top-8 z-10 mt-0 w-full flex-grow text-start ${!mobileOnlyLayout ? "min-[950px]:flex-grow min-[950px]:text-left" : ""}`}
      >
        <h1 className="mb-2 font-title text-2xl font-medium text-black">
          {type == NoticeType.Partnerships
            ? dict.partners.form_notice.title
            : ""}
        </h1>
        <p className="font-sans text-base text-black">
          {type == NoticeType.Partnerships
            ? dict.partners.form_notice.description
            : ""}
        </p>
      </div>

      {/* Actions */}
      <div className="z-10 flex w-full justify-end">
        <Button
          title={dict.button.learn_more}
          style="style4"
          as="link"
          color={type == NoticeType.Partnerships ? "black" : "primary"}
          href={
            type == NoticeType.Partnerships
              ? "https://cesium.link/f/sugestoes-parcerias"
              : "/about/become-a-member"
          }
        />
      </div>
    </div>
  );
};

export default NoticeCard;
