import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface DropdownProps {
  options: string[];
  currentOption: string;
  setCurrentOption: (option: string) => void;
  defaultOption?: string;
  defaultOptionText?: string;
  hint?: string;
}

const ListBoxItem = ({
  option,
  index,
  defaultOption,
  defaultOptionText,
  currentOption,
  currentOptionIndex,
}: {
  option: string;
  index: number;
  defaultOption?: string;
  defaultOptionText?: string;
  currentOption: string;
  currentOptionIndex: number;
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    // Ensure selected item is considered in view immediately
    initialInView: option === currentOption,
  });

  const getStaggerDelay = () => {
    const selectedIndex = currentOptionIndex;
    const distanceFromSelected = Math.abs(index - selectedIndex);
    if (selectedIndex < 8 && index < 8) {
      return (index + 1) * 0.05;
    } else if (index - selectedIndex > -10 && index - selectedIndex <= 0) {
      return (10 - distanceFromSelected) * 0.05;
    }
    return 0.05;
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: -10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: easeInOut,
        delay: getStaggerDelay(),
      },
    },
    exit: {
      opacity: 0,
      y: -5,
      transition: {
        duration: 0.2,
        ease: easeInOut,
      },
    },
  };

  return (
    <ListboxOption
      key={index}
      value={option}
      as={motion.div}
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={itemVariants}
      className="group flex cursor-pointer select-none items-center gap-2 rounded-lg p-2 transition-colors hover:bg-primary/5 data-[selected]:bg-primary/10"
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
        {defaultOption === option && defaultOptionText && (
          <p className="text-sm text-primary">{defaultOptionText}</p>
        )}
      </div>
    </ListboxOption>
  );
};

const ListBox = ({
  options,
  currentOption,
  setCurrentOption,
  defaultOption,
  defaultOptionText,
  hint,
}: DropdownProps) => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: easeInOut,
      },
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: easeInOut,
        when: "beforeChildren",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: easeInOut,
      },
    },
  };

  return (
    <Listbox onChange={setCurrentOption} value={currentOption}>
      {({ open }) => (
        <>
          <ListboxButton
            data-umami-event={`mandate-${currentOption}`}
            className="flex h-min rounded-lg border border-black/10 p-1 pl-2 align-middle text-primary"
          >
            {currentOption}
            <span className="material-symbols-outlined">unfold_more</span>
          </ListboxButton>
          <AnimatePresence>
            {open && (
              <ListboxOptions
                static
                as={motion.div}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={containerVariants}
                anchor={{ to: "bottom start", padding: 16, gap: 8 }}
                className="min-w-72 origin-top rounded-2xl border border-black/10 bg-white pt-4 shadow-md"
              >
                {hint && (
                  <h3 className="mx-5 font-semibold leading-7 text-black">
                    {hint}
                  </h3>
                )}
                <div className="max-h-96 w-full overflow-y-auto bg-white">
                  <div className="sticky top-0 h-2 w-full bg-gradient-to-b from-white from-20% to-transparent"></div>
                  <div className="px-4 py-2">
                    {options.map((option, index) => (
                      <ListBoxItem
                        key={index}
                        option={option}
                        index={index}
                        defaultOption={defaultOption}
                        defaultOptionText={defaultOptionText}
                        currentOption={currentOption}
                        currentOptionIndex={options.indexOf(currentOption)}
                      />
                    ))}
                  </div>
                  <div className="sticky bottom-0 h-5 w-full bg-gradient-to-t from-white from-50% to-transparent"></div>
                </div>
              </ListboxOptions>
            )}
          </AnimatePresence>
        </>
      )}
    </Listbox>
  );
};

export default ListBox;
