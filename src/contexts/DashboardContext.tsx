import { useToggle, useViewport } from "@/hooks";
import React, { createContext, useContext, useEffect } from "react";

export interface IDashboardContextProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  onCloseSidebar: () => void;
}

export const DashboardContext = createContext<IDashboardContextProps>({
  isSidebarOpen: false,
  toggleSidebar: () => {},
  onCloseSidebar: () => {},
});

function DashboardContextProvider({ children }: { children: React.ReactNode }) {
  const {
    isOpen: isSidebarOpen,
    onClose: onCloseSidebar,
    toggle: toggleSidebar,
  } = useToggle();
  const { width } = useViewport();

  const windowIsLoaded = typeof window !== "undefined" && window.document;
  useEffect(() => {
    if (windowIsLoaded) {
      let isSmallScreen = width && width < 1024;

      if (isSidebarOpen && isSmallScreen) {
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.overflowY = "unset";
      }
    }
  }, [isSidebarOpen, width]);

  return (
    <DashboardContext.Provider
      value={{
        isSidebarOpen,
        toggleSidebar,
        onCloseSidebar,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}

export default DashboardContextProvider;

export const useDashboard = () => useContext(DashboardContext);
