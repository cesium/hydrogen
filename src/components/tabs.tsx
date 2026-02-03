import clsx from "clsx";
import { createContext, useContext, useState } from "react";
import { motion } from "framer-motion";

interface BasicProps {
  children: React.ReactNode;
  className?: string;
}

interface TabProps {
  name: string;
  icon: string;
  refTo: string;
}

interface TabContentProps extends BasicProps {
  id: string;
}

interface TabContextProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  layoutId: string;
}

interface GroupTabsProps extends BasicProps {
  defaultTab: string;
  layoutId: string;
}

const TabsContext = createContext<TabContextProps | undefined>(undefined);

export function Tab({ name, icon, refTo }: TabProps) {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("Tab without TabGroup");
  }
  const { currentTab, setCurrentTab, layoutId } = context;
  const isSelected = refTo === currentTab;
  return (
    <button
      onClick={() => setCurrentTab(refTo)}
      className={`relative flex items-center gap-2 rounded-lg px-4 py-2 font-medium transition-colors
                        ${isSelected ? " text-primary " : "hover:text-gray-900 hover:bg-gray-100 text-gray"}`}
    >
      <span>{icon} </span>
      {name}
      {isSelected && (
        <motion.div
          layoutId={layoutId}
          className="absolute bottom-0 left-0 h-[2px] w-full bg-primary"
        />
      )}
    </button>
  );
}

export function TabsContainer({ children, className }: BasicProps) {
  return (
    <div className={clsx("flex flex-row rounded-xl p-1", className)}>
      {children}
    </div>
  );
}

export function TabsContentContainer({ children, className }: BasicProps) {
  return <div className={className}>{children}</div>;
}

export function TabContent({ children, className, id }: TabContentProps) {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("TabContent without TabGroup");
  }
  const { currentTab } = context;
  return id === currentTab ? <div className={className}>{children}</div> : null;
}

export function GroupTabs({
  defaultTab,
  layoutId,
  children,
  className,
}: GroupTabsProps) {
  const [currentTab, setCurrentTab] = useState<string>(defaultTab);

  return (
    <div className={className}>
      <TabsContext.Provider value={{ currentTab, setCurrentTab, layoutId }}>
        {children}
      </TabsContext.Provider>
    </div>
  );
}
