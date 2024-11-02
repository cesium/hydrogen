import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import exp from "constants";
import { useState } from "react";

interface DropdownProps {
  options: string[];
  currentOption: string;
  setCurrentOption: (option: string) => void;
  defaultOption?: string;
  defaultOptionText?: string;
  hint?: string;
}

const ListBox = ({
  options,
  currentOption,
  setCurrentOption,
  defaultOption,
  defaultOptionText,
  hint,
}: DropdownProps) => {
  return (
    <Listbox onChange={setCurrentOption} value={currentOption}>
      <ListboxButton className="flex h-min rounded-lg bg-black/5 p-1 pl-2 align-middle text-primary">
        {currentOption}
        <span className="material-symbols-outlined">unfold_more</span>
      </ListboxButton>
      <ListboxOptions
        anchor={{ to: "bottom start", padding: 16, gap: 8 }}
        className="min-w-72 rounded-2xl border border-black/10 bg-white pt-4 shadow-md"
      >
        {hint && (
          <h3 className="mx-5 mb-2 font-semibold leading-7 text-black">
            {hint}
          </h3>
        )}
        <div className="mb-4 max-h-96 w-full overflow-auto bg-white px-4">
          {options.map((option, index) => (
            <ListboxOption
              key={index}
              value={option}
              className="group flex items-center gap-2 rounded-lg p-2 data-[selected]:bg-primary/10"
            >
              <svg
                className="hidden group-data-[selected]:block"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="20" height="20" rx="10" fill="#ED7950" />
                <rect x="7" y="7" width="6" height="6" rx="3" fill="white" />
              </svg>
              <svg
                className="group-data-[selected]:hidden"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.75"
                  y="0.75"
                  width="18.5"
                  height="18.5"
                  rx="9.25"
                  stroke="black"
                  strokeOpacity="0.2"
                  strokeWidth="1.5"
                />
              </svg>
              <div>
                {option}
                {defaultOption == option && defaultOptionText && (
                  <p className="text-sm text-primary">{defaultOptionText}</p>
                )}
              </div>
            </ListboxOption>
          ))}
        </div>
      </ListboxOptions>
    </Listbox>
  );
};

export default ListBox;
